import { ReactNode } from 'react';
import { Metadata } from 'next';
import { Locale } from 'next-intl';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>
}

export const metadata: Metadata = {
  robots: {
    index: false,
    follow: false
  }
};

export default async function AuthLayout({ children }: Props) {
  return (
    <div className='container flex-1 flex items-center justify-center'>
      <div className='bg-overlay shadow w-full md:w-lg rounded px-4 py-8 xs:px-12'>
        {children}
      </div>
    </div>
  );
}
