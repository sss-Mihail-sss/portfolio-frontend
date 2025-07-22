'use client';

import { ChevronDownIcon, LayoutDashboardIcon, ShieldUserIcon, UsersIcon } from 'lucide-react';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem
} from '@/ui/sidebar';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/ui/collapsible';
import { Link } from '@/ui/link';
import { Button } from '@/ui/button';

function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        test
      </SidebarHeader>

      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <Button variant='ghost' className='w-full justify-start'>
                <LayoutDashboardIcon />
                Dashboard
              </Button>
            </SidebarMenuItem>

            <Collapsible asChild>
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <Button variant='ghost' className='w-full justify-start'>
                    <ShieldUserIcon />
                    User Management
                    <ChevronDownIcon className='group-data-[state=open]:rotate-180 ml-auto' />
                  </Button>
                </CollapsibleTrigger>
                <CollapsibleContent asChild>
                  <SidebarMenuSub>
                    <SidebarMenuSubItem>
                      <Button asChild variant='ghost' className='w-full justify-start'>
                        <Link href='/user-management/users'>
                          <UsersIcon />
                          Users
                        </Link>
                      </Button>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Button asChild variant='ghost' className='w-full justify-start'>
                        <Link href='/user-management/roles'>
                          Roles
                        </Link>
                      </Button>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Button asChild variant='ghost' className='w-full justify-start'>
                        Permissions
                      </Button>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Button asChild variant='ghost' className='w-full justify-start'>
                        Account
                      </Button>
                    </SidebarMenuSubItem>
                    <SidebarMenuSubItem>
                      <Button asChild variant='ghost' className='w-full justify-start'>
                        Logs
                      </Button>
                    </SidebarMenuSubItem>
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>

      <SidebarFooter>
        <span className='text-xs text-muted text-center'>
          Powered by Mihai
        </span>
      </SidebarFooter>
    </Sidebar>
  );
}

export { AppSidebar };
