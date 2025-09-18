import { Separator as BaseSeparator } from '@base-ui-components/react/separator';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

const Separator = ({ className, orientation = 'horizontal', ...props }: ComponentProps<typeof BaseSeparator>) => {
  return (
    <BaseSeparator
      data-slot="separator"
      orientation={orientation}
      className={cn(orientation === 'horizontal' && 'h-px', orientation === 'vertical' && 'w-px', className)}
      {...props}
    />
  );
};

export { Separator };
