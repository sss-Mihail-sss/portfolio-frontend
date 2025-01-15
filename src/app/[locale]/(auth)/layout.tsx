import { ReactNode } from 'react';
import { Locale } from 'next-intl';

import { auth } from '@/lib/auth';
import { redirect } from '@/lib/i18n/routing';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>
}

export default async function AuthLayout({ children, params }: Props) {
  const { locale } = await params;
  const session = await auth();

  if (session) {
    redirect({ href: '/', locale });
  }

  return (
    <div className='container flex-1 flex items-center justify-center'>
      <div className='bg-card w-full md:w-auto rounded'>
        {children}
      </div>
    </div>
  );
}
