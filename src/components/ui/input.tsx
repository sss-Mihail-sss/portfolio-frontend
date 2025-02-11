import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const inputVariants = tv({
  base: 'flex h-9 w-full rounded-md px-3 py-1 text-base md:text-sm border border-input bg-transparent transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:cursor-not-allowed disabled:opacity-50',
  variants: {
    variant: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

type InputProps = ComponentProps<'input'> & VariantProps<typeof inputVariants>;

const Input = ({ ref, type, variant, className, ...props }: InputProps) => {
  return (
    <input type={type} ref={ref} className={cn(inputVariants({ variant }), className)} {...props} />
  );
};

export { Input };
