import { ReactNode } from 'react';
import { Locale } from 'next-intl';
import { SSRProviders } from '@/components/providers/ssr';
import { CSRProvider } from '@/components/providers/csr';
import { cn } from '@/lib/utils';
import { geistMono, geistSans } from '@/lib/font';

type Props = {
  children: ReactNode;
  locale: Locale;
}

const BaseLayout = async ({ locale, children }: Props) => {
  return (
    <html className="h-full" lang={locale}>
      <body className={cn(geistMono.variable, geistSans.variable, 'scheme-light-dark theme-slate antialiased bg-background min-h-screen flex flex-col font-geist-sans')}>
        <SSRProviders locale={locale}>
          <CSRProvider>
            {children}
          </CSRProvider>
        </SSRProviders>
      </body>
    </html>
  );
};

export { BaseLayout };
