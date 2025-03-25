'use client';

import { useAtomValue } from 'jotai';

import { sidebarStateAtom } from '@/stores/jotai/sidebar';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const state = useAtomValue(sidebarStateAtom);

  return (
    <aside
      className={cn(
        'bg-muted rounded-lg transition-all',
        state === 'expanded' ? 'w-sidebar' : 'w-sidebar-collapse',
      )}
    >

    </aside>
  );
};

export { Sidebar };
