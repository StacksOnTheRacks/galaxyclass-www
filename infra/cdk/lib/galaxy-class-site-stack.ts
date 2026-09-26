import { Aws, CfnOutput, Duration, RemovalPolicy, Stack, type StackProps } from 'aws-cdk-lib';
import {
  AllowedMethods,
  Distribution,
  Function,
  FunctionCode,
  FunctionEventType,
  FunctionRuntime,
  PriceClass,
  ResponseHeadersPolicy,
  S3OriginAccessControl,
  ViewerProtocolPolicy,
} from 'aws-cdk-lib/aws-cloudfront';
import { S3BucketOrigin } from 'aws-cdk-lib/aws-cloudfront-origins';
import { PolicyDocument, PolicyStatement, ServicePrincipal } from 'aws-cdk-lib/aws-iam';
import { ARecord, HostedZone, RecordTarget } from 'aws-cdk-lib/aws-route53';
import { CloudFrontTarget } from 'aws-cdk-lib/aws-route53-targets';
import { BlockPublicAccess, Bucket, CfnBucketPolicy } from 'aws-cdk-lib/aws-s3';
import { BucketDeployment, Source } from 'aws-cdk-lib/aws-s3-deployment';
import { Certificate, CertificateValidation } from 'aws-cdk-lib/aws-certificatemanager';
import { StringParameter } from 'aws-cdk-lib/aws-ssm';
import type { Construct } from 'constructs';
import { canonicalRedirectFunctionCode } from './cloudfront-canonical-redirect.js';

export const HOSTED_ZONE_ID = 'Z02927871LCJW2KMZGKOP';
export const ZONE_NAME = 'galaxyclass.app';
export const APEX_HOST = 'galaxyclass.app';
export const WWW_HOST = 'www.galaxyclass.app';
export const SITE_URL = 'https://galaxyclass.app';
export const RIFFLE_BUCKET_PARAMETER = '/galaxyclass/riffle/play-origin-bucket';

export const STUDIO_CSP =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' https://cognito-idp.us-east-1.amazonaws.com; frame-src 'none'; upgrade-insecure-requests";

export const RIFFLE_CSP =
  "default-src 'self'; base-uri 'self'; object-src 'none'; frame-ancestors 'none'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline'; img-src 'self' data: blob:; font-src 'self' data:; connect-src 'self' wss://*.execute-api.us-east-1.amazonaws.com; frame-src 'none'; upgrade-insecure-requests";

export interface GalaxyClassSiteStackProps extends StackProps {
  /** Studio static export directory. Tests pass a fixture; production may pass repo out/. */
  studioAssetPath: string;
}

/**
 * Prod static site: private studio origin, Riffle origin from SSM, apex canonical host.
 * Live deploy, ACM ISSUED, and the Riffle parameter existing in AWS are other tickets.
 */
export class GalaxyClassSiteStack extends Stack {
  constructor(scope: Construct, id: string, props: GalaxyClassSiteStackProps) {
    super(scope, id, props);

    const zone = HostedZone.fromHostedZoneAttributes(this, 'Zone', {
      hostedZoneId: HOSTED_ZONE_ID,
      zoneName: ZONE_NAME,
    });

    const certificate = new Certificate(this, 'SiteCertificate', {
      domainName: APEX_HOST,
      subjectAlternativeNames: [WWW_HOST],
      validation: CertificateValidation.fromDns(zone),
    });

    const studioBucket = new Bucket(this, 'StudioOrigin', {
      blockPublicAccess: BlockPublicAccess.BLOCK_ALL,
      enforceSSL: true,
      removalPolicy: RemovalPolicy.RETAIN,
    });

    const riffleBucketName = StringParameter.valueFromLookup(this, RIFFLE_BUCKET_PARAMETER);
    const riffleBucket = Bucket.fromBucketName(this, 'RifflePlayOrigin', riffleBucketName);

    const originAccessControl = new S3OriginAccessControl(this, 'OriginAccessControl');
    const studioOrigin = S3BucketOrigin.withOriginAccessControl(studioBucket, { originAccessControl });
    const riffleOrigin = S3BucketOrigin.withOriginAccessControl(riffleBucket, { originAccessControl });

    const viewerRequest = new Function(this, 'CanonicalRedirect', {
      code: FunctionCode.fromInline(canonicalRedirectFunctionCode),
      runtime: FunctionRuntime.JS_2_0,
    });

    const hsts = {
      accessControlMaxAge: Duration.seconds(31536000),
      includeSubdomains: true,
      preload: false,
      override: true,
    };
    const studioHeaders = new ResponseHeadersPolicy(this, 'StudioHeaders', {
      securityHeadersBehavior: {
        strictTransportSecurity: hsts,
        contentSecurityPolicy: { contentSecurityPolicy: STUDIO_CSP, override: true },
      },
    });
    const riffleHeaders = new ResponseHeadersPolicy(this, 'RiffleHeaders', {
      securityHeadersBehavior: {
        strictTransportSecurity: hsts,
        contentSecurityPolicy: { contentSecurityPolicy: RIFFLE_CSP, override: true },
      },
    });

    const behavior = {
      viewerProtocolPolicy: ViewerProtocolPolicy.REDIRECT_TO_HTTPS,
      allowedMethods: AllowedMethods.ALLOW_GET_HEAD_OPTIONS,
      compress: true,
      functionAssociations: [
        {
          function: viewerRequest,
          eventType: FunctionEventType.VIEWER_REQUEST,
        },
      ],
    };

    const distribution = new Distribution(this, 'Site', {
      certificate,
      domainNames: [APEX_HOST, WWW_HOST],
      defaultRootObject: 'index.html',
      priceClass: PriceClass.PRICE_CLASS_100,
      defaultBehavior: {
        origin: studioOrigin,
        responseHeadersPolicy: studioHeaders,
        ...behavior,
      },
      additionalBehaviors: {
        '/riffle': {
          origin: riffleOrigin,
          responseHeadersPolicy: riffleHeaders,
          ...behavior,
        },
        '/riffle/*': {
          origin: riffleOrigin,
          responseHeadersPolicy: riffleHeaders,
          ...behavior,
        },
      },
      errorResponses: [
        {
          httpStatus: 403,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(0),
        },
        {
          httpStatus: 404,
          responseHttpStatus: 200,
          responsePagePath: '/index.html',
          ttl: Duration.seconds(0),
        },
      ],
    });

    new CfnBucketPolicy(this, 'RiffleOriginReadPolicy', {
      bucket: riffleBucket.bucketName,
      policyDocument: new PolicyDocument({
        statements: [
          new PolicyStatement({
            principals: [new ServicePrincipal('cloudfront.amazonaws.com')],
            actions: ['s3:GetObject'],
            resources: [riffleBucket.arnForObjects('*')],
            conditions: {
              StringEquals: {
                'AWS:SourceArn': `arn:${Aws.PARTITION}:cloudfront::${Aws.ACCOUNT_ID}:distribution/${distribution.distributionId}`,
              },
            },
          }),
        ],
      }),
    });

    new ARecord(this, 'ApexAlias', {
      zone,
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });
    new ARecord(this, 'WwwAlias', {
      zone,
      recordName: 'www',
      target: RecordTarget.fromAlias(new CloudFrontTarget(distribution)),
    });

    new BucketDeployment(this, 'StudioAssets', {
      sources: [Source.asset(props.studioAssetPath)],
      destinationBucket: studioBucket,
      distribution,
      distributionPaths: ['/*'],
    });

    new CfnOutput(this, 'BucketName', { value: studioBucket.bucketName });
    new CfnOutput(this, 'DistributionId', { value: distribution.distributionId });
    new CfnOutput(this, 'DistributionDomainName', { value: distribution.distributionDomainName });
    new CfnOutput(this, 'SiteUrl', { value: SITE_URL });
    new CfnOutput(this, 'CertificateArn', { value: certificate.certificateArn });
  }
}
