'use client';
import { useDroppable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

import { cn, tv } from '@/lib/utils';

const droppableVariants = tv({
  base: '',
  variants: {
    isOver: {
      true: 'bg-blue-200',
      false: '',
    },
  },
});

type Props = {
  children?: ReactNode;
  className?: string;
  id: string;
};

const Droppable = ({ children, className, id }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(className, droppableVariants({ isOver }))}
    >
      {children}
    </div>
  );
};

export { Droppable };
