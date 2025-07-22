'use client';

import { createContext } from 'react';

export type SidebarContextProps = {
  isOpen: boolean;
  isMobile: boolean;
  toggleSidebar: () => void;
  closeSidebar: () => void;
  openSidebar: () => void;
};

export const SidebarContext = createContext<SidebarContextProps | undefined>(undefined);
