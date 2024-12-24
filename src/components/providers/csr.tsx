'use client';

import { ReactNode } from 'react';

type Props = {
  children: ReactNode;
}

const CSRProvider = ({ children }: Props) => {
  return (
    <>
      {children}
    </>
  );
};

export { CSRProvider };
