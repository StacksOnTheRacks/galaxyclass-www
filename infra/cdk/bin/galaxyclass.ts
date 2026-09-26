#!/usr/bin/env node
import { existsSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { App } from 'aws-cdk-lib';
import { GalaxyClassAuthStack } from '../lib/galaxy-class-auth-stack.js';
import { GalaxyClassSiteStack } from '../lib/galaxy-class-site-stack.js';

const app = new App();
const repoRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '../../..');
const studioOut = path.join(repoRoot, 'out');
const studioFixture = path.join(repoRoot, 'infra/cdk/test/fixtures/site-out');

new GalaxyClassAuthStack(app, 'GalaxyClassAuth-prod', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
});

new GalaxyClassSiteStack(app, 'GalaxyClassSite-prod', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
  studioAssetPath: existsSync(studioOut) ? studioOut : studioFixture,
});
