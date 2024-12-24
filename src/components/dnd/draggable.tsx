'use client';

import { ReactNode } from 'react';
import { useDraggable } from '@dnd-kit/core';
import { CSS } from '@dnd-kit/utilities';

type Props = {
  children: ReactNode;
  id: string;
  data?: AnyData;
}

const Draggable = ({ children, id, data }: Props) => {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({ id, data });

  const style = transform ? {
    transform: CSS.Translate.toString(transform),
  } : undefined;

  return (
    <div ref={setNodeRef} style={style} {...listeners} {...attributes}>
      {children}
    </div>
  );
};

export { Draggable };
