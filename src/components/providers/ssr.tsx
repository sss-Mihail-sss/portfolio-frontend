import { ReactNode } from 'react';
import { Locale, NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import { getMessages } from 'next-intl/server';

type Props = {
  children: ReactNode;
  locale: Locale;
}

const SSRProviders = async ({ children, locale }: Props) => {
  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider messages={messages}>
      <NuqsAdapter>
        {children}
      </NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { SSRProviders };
