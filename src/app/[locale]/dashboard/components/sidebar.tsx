'use client';

import { useAtomValue } from 'jotai';

import { sidebarStateAtom, sidebarStateAtomPersistence } from '@/stores/jotai/sidebar';
import { cn } from '@/lib/utils';

const Sidebar = () => {
  const state = useAtomValue(sidebarStateAtomPersistence);

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
