import { atomWithStorage } from 'jotai/utils';

type Status = 'expanded' | 'collapsed'

export const sidebarStateAtom = atomWithStorage<Status>('sidebar-state', 'expanded');
