'use client';

import { atomWithStorage } from 'jotai/utils';
import { z } from 'zod';

export type Status = 'expanded' | 'collapsed';
export const SIDEBAR_STATUS = 'sidebar-state';

const sidebarSchema = z.enum(['expanded', 'collapsed']);

export const sidebarStateAtomPersistence = atomWithStorage<Status>(
  SIDEBAR_STATUS,
  'expanded',
  {
    getItem(key, initialValue) {
      const storedValue = localStorage.getItem(key);

      try {
        return sidebarSchema.parse(JSON.parse(storedValue ?? ''));
      } catch (error) {
        return initialValue;
      }
    },
    setItem(key, value) {
      localStorage.setItem(key, JSON.stringify(value));
    },
    removeItem(key) {
      localStorage.removeItem(key);
    },
  },
);
