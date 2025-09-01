import { type Locale, NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';
import { z } from 'zod/v4-mini';

import { getLanguage } from '@/lib/utils/i18n';

type Props = {
  children: ReactNode;
  locale: Locale;
};

async function loadLocale(lang: string) {
  try {
    const { default: locale } = await import(`zod/v4/locales/${lang}.js`);
    z.config(locale());
  } catch (error) {
    // biome-ignore lint/suspicious/noConsole: Logging if locale from language not exist
    console.log(`Failed load locale ${lang}`, error);
  }
}

const ServerProviders = async ({ children, locale }: Props) => {
  const language = getLanguage(locale);
  await loadLocale(language);

  return (
    <NextIntlClientProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { ServerProviders };
