'use client';

import { ReactNode } from 'react';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { QueryClientProvider } from '@tanstack/react-query';

import { getQueryClient } from '@/lib/tanstack';

type Props = {
  children: ReactNode;
}

const CSRProvider = ({ children }: Props) => {
  const queryClient = getQueryClient();

  return (
    <ThemeProvider
      enableColorScheme
      enableSystem
      disableTransitionOnChange
      defaultTheme='system'
      attribute='class'
      themes={['light', 'dark']}
    >
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster duration={10000000} toastOptions={{ unstyled: true }} />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export { CSRProvider };
