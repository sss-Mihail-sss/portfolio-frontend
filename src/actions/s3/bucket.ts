'use server';

import { getCloudWatchClient } from '@/lib/s3';
import { GetMetricDataInput, GetMetricDataCommand } from '@aws-sdk/client-cloudwatch';

export async function getBucketSize() {
  const client = getCloudWatchClient();

  const params: GetMetricDataInput = {
    MetricDataQueries: [
      {
        Id: 'bucket-size',
      }
    ],
    StartTime: new Date(),
    EndTime: new Date(),
  };
  const command = new GetMetricDataCommand(params);
  const response = await client.send(command);

  return response;
}
