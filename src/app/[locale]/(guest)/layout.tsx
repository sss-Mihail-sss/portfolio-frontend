import type { ReactNode } from 'react';

import { Header } from '@/components/layouts/header';

type Props = {
  children: ReactNode;
};

export default async function GuestLayout({ children }: Props) {
  return (
    <>
      <Header />

      {children}
    </>
  );
}
