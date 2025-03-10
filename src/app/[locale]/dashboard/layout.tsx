import { ReactNode } from 'react';
import { cookies } from 'next/headers';

import { SidebarInset, SidebarProvider } from '@/ui/sidebar';
import { SiteHeader } from './components/site-header';
import { AppSidebar } from './components/app-sidebar';

type Props = {
  children: ReactNode;
}

export default async function Layout({ children }: Props) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get('sidebar_state')?.value === 'true';


  return (
    <div className='[--header-height:calc(--spacing(14))]'>
      <SidebarProvider className='flex flex-col' defaultOpen={defaultOpen}>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar />
          <SidebarInset>
            {children}
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
