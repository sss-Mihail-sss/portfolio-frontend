import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { LoginForm } from '@/components/form/login';

type Props = {
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.login' });

  return {
    title: t('title'),
  };
}

export default async function LoginPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('form.login.title')}</h1>
        <p className="text-md text-secondary">{t('form.login.description')}</p>
      </div>

      <LoginForm />
    </>
  );
}
