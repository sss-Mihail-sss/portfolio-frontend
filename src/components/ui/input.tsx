import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentProps<'input'>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={cn(
        'h-10 rounded-md border border-base-border-input bg-base-input px-2.5 py-2 text-label text-neutral-accent-fg outline-none transition',
        'placeholder:text-base-placeholder-fg',
        'focus-visible:border-base-border-input-focus focus-visible:ring-2 focus-visible:ring-base-border-input-focus',
        'aria-invalid:border-negative-border-accent',
        'disabled:bg-base-input-disabled disabled:opacity-40',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
