import { type UseSortableInput, useSortable } from '@dnd-kit/react/sortable';
import { type ReactNode } from 'react';

import { cn, tv } from '@/lib/utils/classnames';

type Props = {
  children: ReactNode;
  className?: string;
} & UseSortableInput;

const sortableVariants = tv({
  base: '',
  variants: {
    isDropTarget: {
      true: '',
      false: '',
    },
    isDragging: {
      true: '',
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

const SortableItem = ({ children, className, ...props }: Props) => {
  const { ref, isDropTarget, isDragging, isDragSource, isDropping } = useSortable(props);

  return (
    <div
      data-slot="sortable-item"
      ref={ref}
      className={cn(sortableVariants({ isDropTarget, isDragging, isDragSource, isDropping }), className)}
    >
      {children}
    </div>
  );
};

export { SortableItem };
