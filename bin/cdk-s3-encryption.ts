#!/usr/bin/env node
import * as cdk from '@aws-cdk/core';
import { CdkS3EncryptionStack } from '../lib/cdk-s3-encryption-stack';

const app = new cdk.App();

const encryptionOption = app.node.tryGetContext('encryptionOption');

new CdkS3EncryptionStack(app, 'CdkS3EncryptionStack', {
    encryptionOption: encryptionOption
});
