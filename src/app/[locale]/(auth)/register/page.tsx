import type { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { RegisterForm } from '@/components/form/register';

export async function generateMetadata({ params }: PageProps<'/[locale]/register'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.register' });

  return {
    title: t('title'),
  };
}

export default async function Page({ params }: PageProps<'/[locale]/register'>) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <div className="space-y-2 text-center">
        <h1 className="font-bold text-heading-2xl">{t('form.register.title')}</h1>
        <p className="text-secondary text-sm">{t('form.register.description')}</p>
      </div>

      <RegisterForm />
    </>
  );
}
