'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import type { ReactNode } from 'react';
import { Toaster } from 'sonner';

import { getQueryClient } from '@/lib/integrations/tanstack';

type Props = {
  children: ReactNode;
};

const ClientProviders = ({ children }: Props) => {
  const queryClient = getQueryClient();

  return (
    <ThemeProvider
      enableColorScheme
      enableSystem
      disableTransitionOnChange
      defaultTheme="system"
      attribute="class"
      themes={['light', 'dark', 'light-blue', 'dark-blue']}
    >
      <QueryClientProvider client={queryClient}>
        {children}

        <Toaster
          duration={10_000_000}
          richColors
          closeButton
          // toastOptions={{ unstyled: true }}
        />
      </QueryClientProvider>
    </ThemeProvider>
  );
};

export { ClientProviders };
