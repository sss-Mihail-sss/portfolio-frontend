import { atomWithStorage, createJSONStorage } from 'jotai/utils';

import { deleteCookie, getCookie, setCookie } from '@/lib/cookie';

type Status = 'expanded' | 'collapsed';

const cookieStorage = createJSONStorage(() => {
  async function getItem(key: string) {
    const value = await getCookie(key);
    if (typeof value == 'undefined') {
      return null;
    }

    return value;
  }

  async function setItem(key: string, value: string) {
    await setCookie(key, value);
  }

  async function removeItem(key: string) {
    await deleteCookie(key);
  }

  return {
    getItem: getItem,
    setItem: setItem,
    removeItem: removeItem,
  };
});

export const sidebarStateAtom = atomWithStorage<Status>('sidebar-state', 'expanded', cookieStorage);
