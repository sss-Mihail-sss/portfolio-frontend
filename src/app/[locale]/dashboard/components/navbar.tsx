'use client';

import { Fragment } from 'react';
import { useTranslations } from 'next-intl';
import { ChevronRight, PanelLeftClose } from 'lucide-react';
import { useAtom } from 'jotai';

import { Pathnames } from '@/i18n/routing';
import { usePathname } from '@/i18n/navigation';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbSeparator } from '@/ui/breadcrumb';
import { Button } from '@/components/ui/button';
import { sidebarStateAtom } from '@/stores/jotai/sidebar';
import { cn } from '@/lib/utils';

const Navbar = () => {
  const t = useTranslations('navigation');
  const [sidebarStatus, setSidebarStatus] = useAtom(sidebarStateAtom);
  const pathname = usePathname();
  const paths = pathname.split('/');

  function changeSidebarStatus() {
    setSidebarStatus(prev => {
      if (prev === 'expanded') {
        return 'collapsed';
      }

      return 'expanded';
    });
  }

  return (
    <div className='flex gap-2 items-center rounded-lg p-2'>
      <Button size='icon' variant='ghost' onClick={changeSidebarStatus}>
        <PanelLeftClose
          className={cn(
            'size-5 transition-all',
            sidebarStatus === 'expanded' ? '' : 'rotate-y-180',
          )}
        />
      </Button>
      <span className='text-muted-foreground'>|</span>
      <Breadcrumb>
        <BreadcrumbList>
          {
            paths.filter(Boolean).map((path, index) => (
              <Fragment key={path}>
                {
                  index > 0 && (
                    <BreadcrumbSeparator>
                      <ChevronRight />
                    </BreadcrumbSeparator>
                  )
                }
                <BreadcrumbItem>
                  <BreadcrumbLink href={path as Pathnames}>
                    {t(path)}
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </Fragment>
            ))
          }
        </BreadcrumbList>
      </Breadcrumb>
    </div>
  );
};

export { Navbar };
