'use server';

import { ListObjectsV2Command, ListObjectsV2Request, PutObjectCommand, PutObjectRequest } from '@aws-sdk/client-s3';

import { getS3Client } from '@/lib/s3';

export async function getObjects({ path = '/' }: { path?: string }) {
  const client = getS3Client();
  const params: ListObjectsV2Request = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Delimiter: path,
  };

  const command = new ListObjectsV2Command(params);
  const response = await client.send(command);

  const folders = response.CommonPrefixes ? response.CommonPrefixes.map(prefix => prefix.Prefix) : [];
  const files = response.Contents ? response.Contents.map(item => item.Key) : [];

  return { folders, files };
}

export async function createFolder({ folder }: { folder: string }) {
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
