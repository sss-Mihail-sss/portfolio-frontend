import { ReactNode } from 'react';
import { NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';

type Props = {
  children: ReactNode;
}

const SSRProviders = async ({ children }: Props) => {
  return (
    <NextIntlClientProvider>
      <NuqsAdapter>
        {children}
      </NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { SSRProviders };
