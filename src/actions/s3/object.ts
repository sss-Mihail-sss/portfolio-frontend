'use server';

import { ListObjectsV2Command, ListObjectsV2Request, PutObjectCommand, PutObjectRequest } from '@aws-sdk/client-s3';

import { getS3Client } from '@/lib/s3';

export async function getObjects({ path }: { path?: string } = { path: '/' }) {
  const client = getS3Client();
  let continuationToken = undefined;

  const folders: string[] = [];
  const files: string[] = [];

  do {
    const params: ListObjectsV2Request = {
      Bucket: process.env.AWS_BUCKET_NAME,
      Delimiter: path,
      ContinuationToken: continuationToken,
    };

    const command = new ListObjectsV2Command(params);

    try {
      const response = await client.send(command);
      continuationToken = response.NextContinuationToken;

      if (response.CommonPrefixes) {
        for (const prefix of response.CommonPrefixes) {
          if (prefix.Prefix) {
            folders.push(prefix.Prefix);
          }
        }
      }

      if (response.Contents) {
        for (const item of response.Contents) {
          if (item.Key) {
            files.push(item.Key);
          }
        }
      }
    } catch (error) {
      console.error('Failed to get bucket objects:', error);
    }
  } while (continuationToken);

  return { folders, files };
}

export async function createObject({ folder }: { folder: string }) {
  const client = getS3Client();
  const params: PutObjectRequest = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `${folder}/`,
  };

  const command = new PutObjectCommand(params);

  try {
    return await client.send(command);
  } catch (error) {
    console.error(error);
  }
}
