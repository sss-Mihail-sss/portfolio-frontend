import { z } from 'zod';
import { S3Client } from '@aws-sdk/client-s3';
import { CloudWatchClient } from '@aws-sdk/client-cloudwatch';

export function validateS3Environment() {
  const schema = z.object({
    region: z.string(),
    accessKeyId: z.string(),
    secretAccessKey: z.string(),
  });

  const values = {
    region: process.env.AWS_REGION,
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  };

  return schema.safeParse(values);
}

export function getS3Client() {
  const { data, success } = validateS3Environment();

  if (success) {
    return new S3Client({
      region: data?.region,
      credentials: {
        accessKeyId: data?.accessKeyId,
        secretAccessKey: data?.secretAccessKey,
      },
    });
  } else {
    throw new Error('Error parse s3 env variable');
  }
}

export function getCloudWatchClient() {
  const { data, success } = validateS3Environment();

  if (success) {
    return new CloudWatchClient({
      region: process.env.AWS_REGION,
      credentials: {
        accessKeyId: data?.accessKeyId,
        secretAccessKey: data?.secretAccessKey,
      },
    });
  } else {
    throw new Error('Error parse s3 env variable');
  }
}
