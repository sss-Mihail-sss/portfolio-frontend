import { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type InputProps = ComponentProps<'input'>;

function Input({ className, disabled, ...props }: InputProps) {
  return (
    <input
      data-slot='input'
      disabled={disabled}
      className={cn(
        'flex h-9 w-full rounded-md px-3 py-1 text-base md:text-sm border border-input bg-transparent transition-all placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-primary',
        disabled && 'disabled:cursor-not-allowed disabled:opacity-50',
        className,
      )}
      {...props}
    />
  );
}

export { Input };
