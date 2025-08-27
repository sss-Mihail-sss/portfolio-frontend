import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type InputProps = ComponentProps<'input'>;

const Input = ({ className, ...props }: InputProps) => {
  return (
    <input
      data-slot="input"
      className={cn(
        'rounded border-default bg-input p-3 text-sm ring ring-default ring-inset',
        'placeholder:text-muted',
        'outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
        'aria-invalid:ring-danger',
        'disabled:opacity-40',
        className,
      )}
      {...props}
    />
  );
};

export { Input };
