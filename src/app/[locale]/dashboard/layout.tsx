import type { Metadata } from 'next';
import type { Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import type { ReactNode } from 'react';

import { Navbar } from '@/components/dashboard/navbar';
import { AppSidebar } from '@/components/dashboard/sidebar';
import { SidebarProvider } from '@/ui/sidebar';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
};

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.dashboard' });

  return {
    title: t('title'),
  };
}

export default async function Layout({ children }: Props) {
  return (
    <SidebarProvider open>
      <AppSidebar />

      <main className="flex flex-1 flex-col gap-2">
        <Navbar />

        {children}
      </main>
    </SidebarProvider>
  );
}
