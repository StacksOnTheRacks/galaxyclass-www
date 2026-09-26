import { App } from 'aws-cdk-lib';
import { Template } from 'aws-cdk-lib/assertions';
import { GalaxyClassAuthStack } from '../lib/galaxy-class-auth-stack.js';

export const TEST_ACCOUNT = '111111111111';
export const TEST_REGION = 'us-east-1';

export function synthAuthStack(): { stack: GalaxyClassAuthStack; template: Template } {
  const app = new App();
  const stack = new GalaxyClassAuthStack(app, 'GalaxyClassAuth-prod', {
    env: { account: TEST_ACCOUNT, region: TEST_REGION },
  });
  return { stack, template: Template.fromStack(stack) };
}
