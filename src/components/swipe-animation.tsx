'use client';

import { ReactNode } from 'react';
import { AnimatePresence } from 'motion/react';
import * as m from 'motion/react-client';

type Props = {
  children: ReactNode;
  key: string;
}

const SwipeAnimation = ({ children, key }: Props) => {
  return (
    <AnimatePresence>
      <m.div
        className='flex bg-card rounded overflow-hidden'
        key={key}
        initial={{ x: 60 }}
        animate={{ x: 0 }}
        exit={{ x: -60 }}
        transition={{
          x: { type: 'spring', stiffness: 300, damping: 30 },
          opacity: { duration: 0.2 }
        }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export { SwipeAnimation };