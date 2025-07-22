import { ReactNode } from 'react';
import { Metadata } from 'next';
import { cookies } from 'next/headers';
import { getTranslations } from 'next-intl/server';
import { Locale } from 'next-intl';

import { SidebarProvider } from '@/ui/sidebar';

import { AppSidebar } from '@/components/dashboard/sidebar';
import { Navbar } from '@/components/dashboard/navbar';

type Props = {
  children: ReactNode;
  params: Promise<{
    locale: Locale;
  }>;
}

export async function generateMetadata({ params }: Omit<Props, 'children'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: 'meta.dashboard' });

  return {
    title: t('title')
  };
}

export default async function Layout({ children }: Props) {
  const cookieStore = await cookies();
  const sidebarOpen = cookieStore.get('sidebarOpen')?.value === 'true';

  return (
    <SidebarProvider open>
      <AppSidebar />

      <main className='flex flex-col flex-1 gap-2'>
        <Navbar />

        {children}
      </main>
    </SidebarProvider>
  );
}
