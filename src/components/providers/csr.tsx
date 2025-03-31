'use client';

import { ReactNode } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack';
import { WritableAtom } from 'jotai/index';

type Props = {
  children: ReactNode;
  atomValues?: Iterable<readonly [WritableAtom<unknown, [any], unknown>, unknown]>
}

const CSRProvider = ({ children, atomValues }: Props) => {
  const queryClient = getQueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
};

export { CSRProvider };
