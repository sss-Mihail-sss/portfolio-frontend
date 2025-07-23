import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all font-medium',
    'disabled:pointer-events-none',
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2',
  ],
  variants: {
    variant: {
      default: '',
      outline: '',
      ghost: ''
    },
    color: {
      default: 'focus-visible:ring-neutral-accent',
      primary: 'focus-visible:ring-base-border-focus',
      negative: 'focus-visible:ring-negative-accent',
      positive: ''
    },
    size: {
      default: 'text-label rounded-md h-10 py-2 px-3',
      xs: 'text-label rounded-md h-7 py-1 px-2',
      sm: 'text-label rounded-md h-8 py-1.5 px-2.5',
      lg: 'text-label rounded-md h-12 py-3 px-4.5',
      xl: 'text-label rounded-md h-14 py-4 px-6'
    }
  },
  defaultVariants: {
    variant: 'default',
    color: 'default',
    size: 'default',
    rounded: false
  },
  compoundVariants: [
    {
      variant: 'default',
      color: 'default',
      className: 'bg-neutral-accent text-inverse-accent-fg hover:bg-neutral-hover disabled:opacity-30'
    },
    {
      variant: 'outline',
      color: 'default',
      className: 'border border-neutral-border-medium text-neutral-accent-fg hover:bg-neutral-subtle disabled:opacity-40'
    },
    {
      variant: 'ghost',
      color: 'default',
      className: 'text-neutral-accent-fg hover:bg-neutral-subtle disabled:opacity-40'
    },
    {
      variant: 'default',
      color: 'primary',
      className: 'bg-primary-accent text-white-accent-fg hover:bg-primary-hover disabled:bg-neutral-accent disabled:opacity-30'
    },
    {
      variant: 'outline',
      color: 'primary',
      className: 'border border-primary-border-medium text-primary-accent-fg hover:bg-primary-subtle disabled:text-neutral-accent-fg disabled:border-neutral-border-subtle disabled:opacity-40'
    },
    {
      variant: 'ghost',
      color: 'primary',
      className: 'text-primary-accent-fg hover:bg-primary-subtle disabled:text-neutral-accent-fg disabled:opacity-40'
    },
    {
      variant: 'default',
      color: 'negative',
      className: 'bg-negative-accent text-white-accent-fg hover:bg-negative-hover disabled:bg-neutral-accent disabled:opacity-30'
    },
    {
      variant: 'outline',
      color: 'negative',
      className: 'border border-negative-border-medium text-negative-accent-fg hover:bg-negative-subtle disabled:text-neutral-accent-fg disabled:border-neutral-border-subtle disabled:opacity-40'
    },
    {
      variant: 'ghost',
      color: 'negative',
      className: 'text-negative-accent-fg hover:bg-negative-subtle disabled:text-neutral-accent-fg disabled:opacity-40'
    }
  ]
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ variant, size, color, className, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot.Slot : 'button';

  return (
    <Component
      data-slot='button'
      data-variant={variant}
      data-color={color}
      data-size={size}
      type='button'
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
