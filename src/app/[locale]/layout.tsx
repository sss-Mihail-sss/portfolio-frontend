import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import type { Locale } from 'next-intl';
import { hasLocale } from 'next-intl';
import type { ReactNode } from 'react';

import { ClientProviders } from '@/components/providers/client-providers';
import { ServerProviders } from '@/components/providers/server-providers';
import { env } from '@/config/env';
import { locales } from '@/config/i18n/routing';
import { cn } from '@/lib/utils/classnames';
import { inter } from '@/lib/utils/font';

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
        <ServerProviders locale={locale}>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
