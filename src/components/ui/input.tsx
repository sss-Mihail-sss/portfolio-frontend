import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentProps<'input'>;

function Input({ className, disabled, ...props }: InputProps) {
  return (
    <input
      data-slot='input'
      disabled={disabled}
      className={cn(
        'text-fg flex w-full rounded-md px-3 py-2 text-sm border border-input bg-transparent transition-all',
        'placeholder:text-muted-fg',
        'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-1',
        disabled && 'disabled:cursor-not-allowed disabled:opacity-50',
        className
      )}
      {...props}
    />
  );
}

export { Input };
