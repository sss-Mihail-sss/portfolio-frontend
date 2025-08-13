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
    <div className="flex flex-1 flex-col items-center justify-center gap-4">
      <h3 className="font-medium text-7xl">404</h3>
      <h1 className="text-4xl">{t('title')}</h1>
      <h2 className="font-light text-xl">{t('description')}</h2>
      <Button asChild>
        <Link href="/">Go home</Link>
      </Button>
    </div>
  );
}
