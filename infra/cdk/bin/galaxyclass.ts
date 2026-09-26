#!/usr/bin/env node
import { App } from 'aws-cdk-lib';
import { GalaxyClassAuthStack } from '../lib/galaxy-class-auth-stack.js';

const app = new App();

new GalaxyClassAuthStack(app, 'GalaxyClassAuth-prod', {
  env: {
    account: process.env.CDK_DEFAULT_ACCOUNT,
    region: 'us-east-1',
  },
});
