import { ReactNode } from 'react';
import { hasLocale, Locale } from 'next-intl';
import { notFound } from 'next/navigation';

import { BaseLayout } from '@/components/layouts/base';
import { routing } from '@/lib/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <BaseLayout locale={locale}>
      {children}
    </BaseLayout>
  );
}
