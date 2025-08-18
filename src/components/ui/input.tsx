import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type InputProps = ComponentProps<'input'>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      className={cn(
        'h-10 rounded-md border border-default bg-input px-2.5 py-2 text-md transition',
        'placeholder:text-muted',
        'focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2',
        'aria-invalid:border-danger',
        'disabled:bg-base-input-disabled disabled:opacity-40',
        className,
      )}
      {...props}
    />
  );
};

export { Input };
