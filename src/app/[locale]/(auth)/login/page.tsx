import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { LoginForm } from '@/components/form/login';

export async function generateMetadata({ params }: PageProps<'/[locale]/login'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.login' });

  return {
    title: t('title'),
  };
}

export default async function Page({ params }: PageProps<'/[locale]/login'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('form.login.title')}</h1>
        <p className="text-secondary text-sm">{t('form.login.description')}</p>
      </div>

      <LoginForm />
    </>
  );
}
