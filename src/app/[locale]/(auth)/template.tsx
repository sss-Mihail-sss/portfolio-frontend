'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-m';

type Props = {
  children: ReactNode;
}

export default function AuthTemplate({ children }: Props) {
  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}

      transition={{ ease: 'easeInOut', duration: 500 }}
    >
      {children}
    </m.div>
  );
}