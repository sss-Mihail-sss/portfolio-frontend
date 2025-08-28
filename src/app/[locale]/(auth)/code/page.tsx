import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { ForgotPasswordCode } from '@/components/form/forgot-password-code';

export default async function Page({ params }: PageProps<'/[locale]/code'>) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'form.login',
  });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('title')}</h1>
        <p className="text-secondary text-sm">{t('description')}</p>
      </div>

      <ForgotPasswordCode />
    </>
  );
}
