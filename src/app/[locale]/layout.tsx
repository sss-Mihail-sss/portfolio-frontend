import { type Metadata } from 'next';
import { notFound } from 'next/navigation';
import { hasLocale } from 'next-intl';

import { ClientProviders } from '@/components/providers/client-providers';
import { ServerProviders } from '@/components/providers/server-providers';
import { envServer } from '@/config/env/server';
import { locales } from '@/config/i18n/routing';
import { cn } from '@/lib/utils/classnames';
import { inter } from '@/lib/utils/font';

export async function generateMetadata(): Promise<Metadata> {
  return {
    metadataBase: new URL(envServer.webUrl),
  };
}

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export default async function Layout({ children, params }: LayoutProps<'/[locale]'>) {
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
          'flex min-h-dvh flex-col bg-surface font-inter text-base antialiased',
        )}
      >
        <ServerProviders locale={locale}>
          <ClientProviders>{children}</ClientProviders>
        </ServerProviders>
      </body>
    </html>
  );
}
