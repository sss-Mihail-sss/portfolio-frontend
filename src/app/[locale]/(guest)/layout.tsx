import { ReactNode } from 'react';

import { Header } from '@/components/header';

type Props = {
  children: ReactNode;
}

export default async function GuestLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
