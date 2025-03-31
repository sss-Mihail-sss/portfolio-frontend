import { Locale } from 'next-intl';
import { getBucketSize } from '@/actions/s3/bucket';

type Props = {
  params: Promise<{
    locale: Locale;
  }>
}

export default async function Page({}: Props) {
  // const objects = await getBucketSize();
  // console.log(objects);

  return (
    <div>
      Storage dashboard
    </div>
  );
}
