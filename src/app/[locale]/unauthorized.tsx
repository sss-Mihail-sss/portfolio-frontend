import { TriangleAlertIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';

import { Button } from '@/ui/button';
import { Link } from '@/ui/link';

export default function Unauthorized() {
  const t = useTranslations('unauthorized');

  return (
    <main className="flex flex-1 flex-col items-center justify-center gap-4">
      <TriangleAlertIcon className="size-24 text-warning" />
      <div className="text-center">
        <h1 className="text-heading-xl text-warning">401 - {t('title')}</h1>
        <p>{t('description')}</p>
      </div>
      <Button
        color="brand"
        asChild
      >
        <Link href="/login">{t('go-to-login')}</Link>
      </Button>
    </main>
  );
}
