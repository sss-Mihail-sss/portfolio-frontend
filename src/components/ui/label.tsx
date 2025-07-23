'use client';

import { ComponentProps } from 'react';
import { Label as LabelPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

type LabelProps = ComponentProps<typeof LabelPrimitive.Root>;

function Label({ className, ...props }: LabelProps) {
  return (
    <LabelPrimitive.Root
      data-slot='label'
      className={cn(
        'text-label text-neutral-accent-fg peer-disabled:opacity-40',
        className
      )}
      {...props}
    />
  );
}

export { Label, type LabelProps };
