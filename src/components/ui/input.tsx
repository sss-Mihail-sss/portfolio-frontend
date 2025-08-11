import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentProps<'input'>;

function Input({ className, ...props }: InputProps) {
  return (
    <input
      data-slot="input"
      className={cn(
        'h-10 border bg-base-input border-base-border-input rounded-md py-2 px-2.5 text-label text-neutral-accent-fg outline-none transition',
        'placeholder:text-base-placeholder-fg',
        'focus-visible:ring-2 focus-visible:ring-base-border-input-focus focus-visible:border-base-border-input-focus',
        'aria-invalid:border-negative-border-accent',
        'disabled:opacity-40 disabled:bg-base-input-disabled',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
