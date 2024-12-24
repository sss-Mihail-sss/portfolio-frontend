'use client';

import { ReactNode } from 'react';
import { useDroppable } from '@dnd-kit/core';
import { tv } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const droppableVariants = tv({
  base: '',
  variants: {
    isOver: {
      true: 'bg-primary/10',
      false: '',
    },
  },
});

type Props = {
  children?: ReactNode;
  className?: string;
  id: string;
}

const Droppable = ({ children, className, id }: Props) => {
  const { isOver, setNodeRef } = useDroppable({ id });

  return (
    <div
      ref={setNodeRef}
      className={cn(droppableVariants({ isOver }), className)}
    >
      {children}
    </div>
  );
};

export { Droppable };
