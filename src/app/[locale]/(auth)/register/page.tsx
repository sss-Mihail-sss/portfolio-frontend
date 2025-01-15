import { Locale } from 'next-intl';
import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

import { RegisterForm } from '@/components/form/register';

type Props = {
  params: Promise<{
    locale: Locale;
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.register' });

  return {
    title: t('title'),
    robots: {
      index: false,
    },
  };
}

export default function RegisterPage() {
  return (
    <RegisterForm />
  );
}
