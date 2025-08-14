import { type Locale, NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { z } from 'zod/v4-mini';

type Props = {
  children: ReactNode;
  locale: Locale;
};

const ServerProviders = async ({ children, locale }: Props) => {
  const { default: zodLocale } = await import(`zod/v4/locales/${locale}.js`);
  z.config(zodLocale());

  return (
    <NextIntlClientProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { ServerProviders };
