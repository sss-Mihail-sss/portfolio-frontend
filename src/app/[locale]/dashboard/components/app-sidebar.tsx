import { Sidebar, SidebarHeader } from '@/ui/sidebar';
import { TeamSwitcher } from '@/app/[locale]/dashboard/components/team-switcher';

function AppSidebar() {
  return (
    <Sidebar className='top-(--header-height) h-[calc(100svh-var(--header-height))]!'>
      <SidebarHeader>
        <TeamSwitcher />
      </SidebarHeader>
    </Sidebar>
  );
}

export { AppSidebar };
