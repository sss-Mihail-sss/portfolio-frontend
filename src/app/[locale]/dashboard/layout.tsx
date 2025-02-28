import { ReactNode } from 'react';

import { SidebarInset, SidebarProvider } from '@/ui/sidebar';
import { SiteHeader } from './components/site-header';
import { AppSidebar } from './components/app-sidebar';

type Props = {
  children: ReactNode;
}

export default function Layout({ children }: Props) {
  return (
    <div className='[--header-height:calc(--spacing(14))]'>
      <SidebarProvider className='flex flex-col'>
        <SiteHeader />
        <div className='flex flex-1'>
          <AppSidebar />
          <SidebarInset>
            content
          </SidebarInset>
        </div>
      </SidebarProvider>
    </div>
  );
}
