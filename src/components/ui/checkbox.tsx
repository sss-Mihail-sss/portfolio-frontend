'use client';

import { CheckIcon, MinusIcon } from 'lucide-react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>;

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot="checkbox"
      className={cn(
        'group peer flex size-4.5 shrink-0 items-center justify-center rounded-md border border-base-border-input bg-base-input transition-all',
        'not-disabled:data-[state=checked]:border-base-input-on not-disabled:data-[state=checked]:bg-base-input-on',
        'not-disabled:data-[state=indeterminate]:border-base-input-on not-disabled:data-[state=indeterminate]:bg-base-input-on',
        'focus-visible:border-base-border-focus focus-visible:bg-base-input-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-base-border-focus focus-visible:ring-offset-1',
        'aria-invalid:border-negative-border-accent',
        'disabled:border-neutral-accent disabled:bg-neutral-accent disabled:opacity-40',
        className,
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot="checkbox-indicator"
        className="inline-flex items-center justify-center"
      >
        <MinusIcon className="hidden size-3 stroke-4 text-white-accent-fg group-data-[state=indeterminate]:block" />
        <CheckIcon className="hidden size-3 stroke-4 text-white-accent-fg group-data-[state=checked]:block" />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
export type { CheckboxProps };
