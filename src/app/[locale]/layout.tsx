import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from 'next-intl';
import { hasLocale } from 'next-intl';
import type { ReactNode } from 'react';

import { CSRProvider } from '@/components/providers/csr';
import { SSRProviders } from '@/components/providers/ssr';
import { env } from '@/config/env';
import { locales } from '@/config/i18n/routing';
import { inter } from '@/lib/font';
import { cn } from '@/lib/utils';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(env.webUrl),
  };
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
    <html
      className="h-full"
      lang={locale}
      suppressHydrationWarning
    >
      <body
        className={cn(
          // geistMono.variable,
          // geistSans.variable,
          // openSans.variable,
          // roboto.variable,
          // robotoMono.variable,
          // montserrat.variable,
          // raleway.variable,
          inter.variable,
          // graduate.variable,
          'min-h-dvh bg-surface font-inter text-base antialiased',
        )}
      >
        <SSRProviders>
          <CSRProvider>{children}</CSRProvider>
        </SSRProviders>
      </body>
    </html>
  );
}
