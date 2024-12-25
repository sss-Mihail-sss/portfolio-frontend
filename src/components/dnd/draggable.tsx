'use client';

import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { tv } from 'tailwind-variants';

type Props = {
  children: ReactNode;
  id: string;
  data?: AnyData;
}

const draggable = tv({
  base: '',
  variants: {
    isDragging: {
      true: 'opacity-50',
    },
  },
});

const Draggable = ({ children, id, data }: Props) => {
  const { attributes, listeners, setNodeRef, isDragging } = useDraggable({ id, data });

  return (
    <div ref={setNodeRef} {...listeners} {...attributes} className={draggable({ isDragging })}>
      {children}
    </div>
  );
};

export { Draggable };
