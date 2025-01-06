import { ReactNode } from 'react';
import { Locale } from 'next-intl';

import { SSRProviders } from '@/components/providers/ssr';
import { CSRProvider } from '@/components/providers/csr';
import { cn } from '@/lib/utils';
import { geistMono, geistSans } from '@/lib/font';
import { Toaster } from '@/ui/sonner';

type Props = {
  children: ReactNode;
  locale: Locale;
}

const BaseLayout = async ({ locale, children }: Props) => {
  return (
    <html className="h-full" lang={locale}>
      <body
        className={cn(geistMono.variable, geistSans.variable, 'scheme-light-dark antialiased bg-background text-foreground min-h-svh flex flex-col font-geist-sans')}
        data-theme="green"
      >
        <SSRProviders locale={locale}>
          <CSRProvider>
            {children}

            <Toaster duration={100000} closeButton />
          </CSRProvider>
        </SSRProviders>
      </body>
    </html>
  );
};

export { BaseLayout };
