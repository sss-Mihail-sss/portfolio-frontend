'use client';

import { ChevronRight, LucideIcon, MonitorIcon, SettingsIcon } from 'lucide-react';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from '@/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/ui/collapsible';
import { TeamSwitcher } from './team-switcher';

type MenuItem = {
  title: string;
  url: string;
  icon?: LucideIcon;
  items?: {
    title: string;
    url: string;
  }[]
}

const menu: MenuItem[] = [
  {
    title: 'Monitor',
    url: '/dashboard/monitor',
    icon: MonitorIcon,
    items: [
      {
        title: 'Jobs',
        url: '/dashboard/monitor/jobs',
      },
      {
        title: 'Companies',
        url: '/dashboard/monitor/companies',
      },
    ],
  },
  {
    title: 'Setting',
    url: '/dashboard/setting',
    icon: SettingsIcon,
    items: [
      {
        title: 'General',
        url: '/dashboard/setting',
      },
      {
        title: 'Company',
        url: '/dashboard/setting/company',
      },
      {
        title: 'Billing',
        url: '/dashboard/setting/billing',
      },
    ],
  },
];

function AppSidebar() {
  return (
    <Sidebar collapsible='icon' className='top-(--header-height) h-[calc(100svh-var(--header-height))]!'>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>
            Service
          </SidebarGroupLabel>
          <SidebarMenu>
            {
              menu.map(item => (
                <Collapsible key={item.title} asChild className='group/collapsible'>
                  <SidebarMenuItem>
                    <CollapsibleTrigger asChild>
                      <SidebarMenuButton tooltip={item.title}>
                        {item?.icon && <item.icon />}
                        <span>{item.title}</span>
                        <ChevronRight className='group-data-[state=open]/collapsible:rotate-90 ml-auto transition-transform duration-200' />
                      </SidebarMenuButton>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <SidebarMenuSub>
                        {
                          item?.items?.map(item => (
                            <SidebarMenuSubItem key={item.title}>
                              <SidebarMenuSubButton>
                                {item.title}
                              </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                          ))
                        }
                      </SidebarMenuSub>
                    </CollapsibleContent>
                  </SidebarMenuItem>
                </Collapsible>
              ))
            }
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

export { AppSidebar };
