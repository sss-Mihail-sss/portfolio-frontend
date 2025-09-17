import { type Metadata } from 'next';
import { headers } from 'next/headers';
import { unauthorized } from 'next/navigation';
import { type Locale } from 'next-intl';
import { getTranslations } from 'next-intl/server';

import { Navbar } from '@/components/layouts/dashboard/navbar';
import { AppSidebar } from '@/components/layouts/dashboard/sidebar';
import { SidebarProvider } from '@/ui/sidebar';

export async function generateMetadata({ params }: LayoutProps<'/[locale]/dashboard'>): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale: locale as Locale, namespace: 'meta.dashboard' });

  return {
    title: t('title'),
  };
}

export default async function Layout({ children }: LayoutProps<'/[locale]/dashboard'>) {
  const cookies = await headers();
  const session = cookies.get('accessToken');

  if (!session) {
    unauthorized();
  }

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
