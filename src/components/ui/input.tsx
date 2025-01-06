import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const inputVariants = tv({
  base: 'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
});

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputVariants>;

const Input = ({ ref, type, className, ...props }: InputProps) => {
  return (
    <input type={type} ref={ref} className={cn(inputVariants(), className)} {...props} />
  );
};

export { Input };
