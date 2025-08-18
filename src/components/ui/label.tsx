import { Label as LabelPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot="label"
      className={cn('text-label text-neutral-accent-fg peer-disabled:opacity-40', className)}
      {...props}
    />
  );
}

export { Label, type LabelProps };
