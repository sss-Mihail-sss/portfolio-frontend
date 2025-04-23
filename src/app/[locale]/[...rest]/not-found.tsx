import { headers } from 'next/headers';
import { getTranslations } from 'next-intl/server';

import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

export default async function GlobalNotFound() {
  const t = await getTranslations('error.not-found');
  // const headersList = await headers();

  // headersList.forEach((value, key) => {
  //   console.log(key, value);
  // });

  return (
    <div className='flex-1 flex flex-col gap-4 items-center justify-center'>
      <h3 className='text-7xl font-medium'>404</h3>
      <h1 className='text-4xl'>{t('title')}</h1>
      <h2 className='text-xl font-light'>{t('description')}</h2>
      <Button asChild>
        <Link href='/'>
          Go home
        </Link>
      </Button>
    </div>
  );
}
