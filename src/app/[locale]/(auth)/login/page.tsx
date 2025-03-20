import { Metadata } from 'next';
import { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { LoginForm } from '@/components/form/login';

type Props = {
  params: Promise<{
    locale: Locale;
  }>
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.login' });

  return {
    title: t('title'),
  };
}

export default function LoginPage() {
  return (
    <LoginForm />
  );
}
