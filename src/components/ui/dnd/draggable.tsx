'use client';

import { type UseDraggableInput, useDraggable } from '@dnd-kit/react';
import { type ReactNode } from 'react';

import { cn, tv } from '@/lib/utils/classnames';

type Props = {
  children: ReactNode;
  className?: string;
} & UseDraggableInput;

const draggableVariants = tv({
  base: '',
  variants: {
    isDragging: {
      true: 'opacity-50',
      false: '',
    },
    isDragSource: {
      true: '',
      false: '',
    },
    isDropping: {
      true: '',
      false: '',
    },
  },
});

const Draggable = ({ children, className, ...props }: Props) => {
  const { ref, isDragging, isDragSource, isDropping } = useDraggable(props);

  return (
    <div
      data-slot="draggable"
      ref={ref}
      className={cn(draggableVariants({ isDragging, isDragSource, isDropping }), className)}
    >
      {children}
    </div>
  );
};

export { Draggable };
