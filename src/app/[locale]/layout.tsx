import { ReactNode } from 'react';
import { hasLocale, Locale } from 'next-intl';
import { notFound } from 'next/navigation';

import { BaseLayout } from '@/components/layouts/base';
import { locales } from '@/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(locales, locale)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      {children}
    </BaseLayout>
  );
}
