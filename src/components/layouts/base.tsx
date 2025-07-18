import { ReactNode } from 'react';
import { Locale } from 'next-intl';

import { SSRProviders } from '@/components/providers/ssr';
import { CSRProvider } from '@/components/providers/csr';

import { cn } from '@/lib/utils';
import { geistMono, geistSans, graduate, inter, montserrat, openSans, raleway, roboto, robotoMono } from '@/lib/font';

type Props = {
  children: ReactNode;
  locale: Locale;
}

const BaseLayout = async ({ locale, children }: Props) => {
  return (
    <html className='h-full' lang={locale} suppressHydrationWarning>
      <body
        className={cn(
          geistMono.variable,
          geistSans.variable,
          openSans.variable,
          roboto.variable,
          robotoMono.variable,
          montserrat.variable,
          raleway.variable,
          inter.variable,
          graduate.variable,
          'antialiased bg-bg text-fg min-h-dvh flex flex-col font-geist-sans'
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
};

export { BaseLayout };
