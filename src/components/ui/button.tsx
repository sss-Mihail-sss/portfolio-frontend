import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer font-medium outline-offset-1 outline-offset-background focus-visible:outline-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: 'bg-primary text-primary-foreground shadow hover:bg-primary/90',
      outline: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'text-sm h-9 px-6',
      sm: 'text-xs h-7 px-4',
      lg: 'h-11 px-6',
      icon: 'size-8',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ variant, size, className, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot.Slot : 'button';

  return (
    <Component type='button' {...props} className={cn(buttonVariants({ variant, size, className }))} />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
