import { ReactNode } from 'react';
import { hasLocale, Locale } from 'next-intl';
import { notFound } from 'next/navigation';
import { Metadata } from 'next';

import { SSRProviders } from '@/components/providers/ssr';
import { CSRProvider } from '@/components/providers/csr';

import { locales } from '@/config/i18n/routing';
import { cn } from '@/lib/utils';
import { geistMono, geistSans, graduate, inter, montserrat, openSans, raleway, roboto, robotoMono } from '@/lib/font';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({}: Omit<Props, 'children'>): Promise<Metadata> {
  return {
    metadataBase: new URL(process.env.API_URL!)
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
    <html className='h-full' lang={locale} suppressHydrationWarning>
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
          'antialiased bg-surface text-base-fg min-h-dvh font-inter'
        )}
      >
        <SSRProviders>
          <CSRProvider>
            {children}
          </CSRProvider>
        </SSRProviders>
      </body>
    </html>
  );
}
