import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import type { ReactNode } from 'react';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default async function AuthLayout({ children }: Props) {
  return (
    <div className="container flex flex-1 items-center justify-center">
      <div className="w-full rounded bg-overlay px-4 xs:px-12 py-8 shadow md:w-lg">{children}</div>
    </div>
  );
}
