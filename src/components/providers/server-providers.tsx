import { type Locale, NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { z } from 'zod/v4-mini';

import { getLanguage } from '@/lib/utils/i18n';

type Props = {
  children: ReactNode;
  locale: Locale;
};

async function setLocale(lang: string) {
  const locales = await import('zod/v4/locales');
  z.config((locales[lang] ?? locales.nl)());
}

const ServerProviders = async ({ children, locale }: Props) => {
  const language = getLanguage(locale);
  await setLocale(language);

  return (
    <NextIntlClientProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { ServerProviders };
