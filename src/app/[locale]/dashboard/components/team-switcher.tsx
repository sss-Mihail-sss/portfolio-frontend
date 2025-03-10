'use client';

import { useState } from 'react';
import Image from 'next/image';
import { ChevronsUpDownIcon } from 'lucide-react';

import { SidebarMenu, SidebarMenuButton, SidebarMenuItem } from '@/ui/sidebar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/ui/dropdown-menu';

import { Company } from '@/types/company';

type PartCompany = Pick<Company, 'id' | 'name' | 'logo'> & { plan: string }

function TeamSwitcher() {
  const companies: PartCompany[] = [
    {
      id: 1,
      name: 'Jobber Space',
      plan: 'Free',
      logo: 'https://avatars.githubusercontent.com/u/130739088?s=36',
    },
    {
      id: 2,
      name: 'Vercel',
      plan: 'Vip',
      logo: 'https://avatars.githubusercontent.com/u/14985020?s=36',
    },
  ];

  const [company, setCompany] = useState<PartCompany>(companies[0]);

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <SidebarMenuButton
              size='lg'
              className='data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground'
            >
              <div className='bg-sidebar-primary text-sidebar-primary-foreground flex aspect-square size-8 items-center justify-center rounded-lg'>
                <Image
                  width={32}
                  height={32}
                  src={company.logo}
                  alt={company.name}
                  className='aspect-square object-contain rounded'
                />
              </div>
              <div className='flex-1 flex flex-col'>
                <span className='truncate font-medium'>{company.name}</span>
                <span className='truncate text-xs'>{company.plan}</span>
              </div>
              <ChevronsUpDownIcon />
            </SidebarMenuButton>
          </DropdownMenuTrigger>
          <DropdownMenuContent className='w-(--radix-dropdown-menu-trigger-width)' sideOffset={4}>
            {
              companies.map(company => (
                <DropdownMenuItem
                  key={company.name}
                  onClick={() => setCompany(company)}
                  className=''
                >
                  <Image
                    width={36}
                    height={36}
                    src={company.logo}
                    alt={company.name}
                    className='aspect-square object-contain rounded'
                  />
                  <p>{company.name}</p>
                  <span>{company.plan}</span>
                </DropdownMenuItem>
              ))
            }
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  );
}

export { TeamSwitcher };
