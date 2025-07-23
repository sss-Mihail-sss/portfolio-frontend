'use client';

import { ComponentProps } from 'react';
import { Checkbox as CheckboxPrimitive } from 'radix-ui';
import { CheckIcon, MinusIcon } from 'lucide-react';

import { cn } from '@/lib/utils';

type CheckboxProps = ComponentProps<typeof CheckboxPrimitive.Root>

function Checkbox({ className, ...props }: CheckboxProps) {
  return (
    <CheckboxPrimitive.Root
      data-slot='checkbox'
      className={cn(
        'group peer flex items-center justify-center transition-all bg-base-input border border-base-border-input shrink-0 size-4.5 rounded-md',
        'not-disabled:data-[state=checked]:bg-base-input-on not-disabled:data-[state=checked]:border-base-input-on',
        'not-disabled:data-[state=indeterminate]:bg-base-input-on not-disabled:data-[state=indeterminate]:border-base-input-on',
        'focus-visible:bg-base-input-focus focus-visible:border-base-border-focus focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-1 focus-visible:ring-base-border-focus',
        'aria-invalid:border-negative-border-accent',
        'disabled:bg-neutral-accent disabled:border-neutral-accent disabled:opacity-40',
        className
      )}
      {...props}
    >
      <CheckboxPrimitive.Indicator
        data-slot='checkbox-indicator'
        className='inline-flex items-center justify-center'
      >
        <MinusIcon className='size-3 text-white-accent-fg stroke-4 hidden group-data-[state=indeterminate]:block' />
        <CheckIcon className='size-3 text-white-accent-fg stroke-4 hidden group-data-[state=checked]:block' />
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
  );
}

export { Checkbox };
export type { CheckboxProps };
