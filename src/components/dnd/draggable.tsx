'use client';

import type { UseDraggableArguments } from '@dnd-kit/core';
import { useDraggable } from '@dnd-kit/core';
import type { ReactNode } from 'react';

import { tv } from '@/lib/utils';

type Props = {
  children: ReactNode;
} & UseDraggableArguments;

const draggable = tv({
  base: '',
  variants: {
    isDragging: {
      true: 'opacity-50',
    },
  },
});

const Draggable = ({ children, ...props }: Props) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable(props);

  return (
    <div
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      className={draggable({ isDragging })}
    >
      {children}
    </div>
  );
};

export { Draggable };
