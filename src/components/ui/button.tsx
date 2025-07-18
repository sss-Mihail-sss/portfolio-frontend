import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap cursor-pointer transition-all font-medium',
    'disabled:pointer-events-none disabled:opacity-50',
    'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-1'
  ],
  variants: {
    variant: {
      default: 'bg-primary text-primary-fg hover:bg-primary/90',
      outline: 'inset-ring inset-ring-border hover:bg-muted',
      ghost: 'hover:bg-muted'
    },
    size: {
      default: 'text-sm px-4 py-2',
      sm: 'text-xs px-3',
      lg: 'px-6',
      'sq-xs': 'size-8',
      'sq-sm': 'size-9',
      'sq-md': 'size-10'
    },
    rounded: {
      true: 'rounded-full',
      false: 'rounded-md'
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    rounded: false
  }
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ variant, size, className, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot.Slot : 'button';

  return (
    <Component
      data-slot='button'
      type='button'
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
