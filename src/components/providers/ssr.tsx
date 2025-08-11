import { NextIntlClientProvider } from 'next-intl';
import { NuqsAdapter } from 'nuqs/adapters/next/app';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const SSRProviders = async ({ children }: Props) => {
  return (
    <NextIntlClientProvider>
      <NuqsAdapter>{children}</NuqsAdapter>
    </NextIntlClientProvider>
  );
};

export { SSRProviders };
