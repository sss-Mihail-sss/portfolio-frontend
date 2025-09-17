'use client';

import { type UseDroppableInput } from '@dnd-kit/react';
import { useDroppable } from '@dnd-kit/react';
import { type ReactNode } from 'react';

import { cn, tv } from '@/lib/utils/classnames';

type Props = {
  children?: ReactNode;
  className?: string;
} & UseDroppableInput;

const droppableVariants = tv({
  base: '',
  variants: {
    isDropTarget: {
      true: 'bg-blue-200',
      false: '',
    },
  },
});

const Droppable = ({ children, className, ...props }: Props) => {
  const { ref, isDropTarget } = useDroppable(props);

  return (
    <div
      data-slot="droppable"
      ref={ref}
      className={cn(droppableVariants({ isDropTarget }), className)}
    >
      {children}
    </div>
  );
};

export { Droppable };
