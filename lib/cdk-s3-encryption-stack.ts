import * as s3 from '@aws-cdk/aws-s3';
import * as cdk from '@aws-cdk/core';

export interface IBucketStackProps extends cdk.StackProps {
  /**
   * bucket encryption option. Should be either AES or KMS_USER or KMS_MANAGED.
   * AES means Server-side encryption with a master key managed by S3.
   * KMS_USER means Server-side encryption with a KMS key managed by the user.
   * KMS_MANAGED means Server-side KMS encryption with a master key managed by KMS.
   * @attribute
   */
  encryptionOption: string
}

export class CdkS3EncryptionStack extends cdk.Stack {
  constructor(scope: cdk.App, id: string, props: IBucketStackProps) {
    super(scope, id, props);  

    let bucketEncryption = s3.BucketEncryption.KMS_MANAGED;

    if (props.encryptionOption == 'AES') {
      bucketEncryption = s3.BucketEncryption.S3_MANAGED
    }  

    if (props.encryptionOption == 'KMS_USER') {
      bucketEncryption = s3.BucketEncryption.KMS
    }  

    const myBucket = new s3.Bucket(this, "Bucket", {
      encryption: bucketEncryption
    })
    
  }
}
