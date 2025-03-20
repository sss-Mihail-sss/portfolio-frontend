import { Metadata } from 'next';
import { Locale } from 'next-intl';
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
  };
}

export default function RegisterPage() {
  return (
    <RegisterForm />
  );
}
