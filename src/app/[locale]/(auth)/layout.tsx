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
    follow: false,
  },
};

export default async function AuthLayout({ children }: Props) {

  return (
    <div className='container flex-1 flex items-center justify-center'>
      <div className='bg-card w-full md:w-auto rounded'>
        {children}
      </div>
    </div>
  );
}
