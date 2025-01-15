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
    <AnimatePresence mode='wait'>
      <m.div
        className='flex bg-card rounded overflow-hidden'
        key={key}
        initial={{ scale: 0.8 }}
        animate={{ scale: 1 }}
        exit={{ scale: 0.6 }}
      >
        {children}
      </m.div>
    </AnimatePresence>
  );
};

export { SwipeAnimation };