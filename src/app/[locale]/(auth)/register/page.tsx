import { type Metadata } from 'next';
import { type Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { RegisterForm } from '@/components/form/register';

export async function generateMetadata({ params }: PageProps<'/[locale]/register'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'meta.register',
  });

  return {
    title: t('title'),
  };
}

export default async function Page({ params }: PageProps<'/[locale]/register'>) {
  const { locale } = await params;
  const t = await getTranslations({
    locale: locale as Locale,
    namespace: 'form.register',
  });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('title')}</h1>
        <p className="text-secondary text-sm">{t('description')}</p>
      </div>

      <RegisterForm />
    </>
  );
}
