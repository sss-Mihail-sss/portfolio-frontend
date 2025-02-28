'use client';

import { Fragment } from 'react';
import { SidebarIcon } from 'lucide-react';

import { Button } from '@/ui/button';
import { useSidebar } from '@/ui/sidebar';
import { Separator } from '@/ui/separator';
import { Breadcrumb, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/ui/breadcrumb';
import { usePathname } from '@/lib/i18n/routing';

function SiteHeader() {
  const { toggleSidebar } = useSidebar();
  const pathname = usePathname();
  const paths = pathname.split('/').filter(Boolean);

  return (
    <header className='bg-background sticky top-0 z-50 flex items-center w-full border-b'>
      <div className='flex h-(--header-height) w-full items-center gap-2 px-4'>
        <Button size='icon' variant='ghost' onClick={toggleSidebar}>
          <SidebarIcon className='size-4' />
        </Button>
        <Separator orientation='vertical' className='h-4' />
        <Breadcrumb>
          <BreadcrumbList>
            {
              paths.map((path, index) => (
                <Fragment key={path}>
                  {
                    index > 0 && (
                      <BreadcrumbSeparator />
                    )
                  }
                  <BreadcrumbLink href={`/${paths.slice(0, index + 1).join('/')}`} className='capitalize'>
                    {path}
                  </BreadcrumbLink>
                </Fragment>
              ))
            }
          </BreadcrumbList>
        </Breadcrumb>
      </div>
    </header>
  );
}

export { SiteHeader };
