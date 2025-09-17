'use client';

import { QueryClientProvider } from '@tanstack/react-query';
import { ThemeProvider } from 'next-themes';
import { type ReactNode, useEffect } from 'react';
import { scan } from 'react-scan/all-environments';
import { Toaster } from 'sonner';

import { envClient } from '@/config/env/client';
import { getQueryClient } from '@/lib/integrations/tanstack';

type Props = {
  children: ReactNode;
};

const ClientProviders = ({ children }: Props) => {
  const queryClient = getQueryClient();

  useEffect(() => {
    scan({
      enabled: !envClient.isProduction,
    });
  }, []);

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
