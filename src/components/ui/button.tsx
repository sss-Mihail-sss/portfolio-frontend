import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

// inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all font-medium disabled:pointer-events-none
// focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-border-focus
// rounded-md h-12 py-3 px-4.5 bg-brand-bold hover:bg-brand-bold-hover active:bg-brand-bold-press text-inverse-fg

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all font-medium',
    'disabled:bg-neutral-accent disabled:text-inverted-accent-fg disabled:cursor-not-allowed disabled:opacity-30',
    'outline-border-focus focus-visible:outline-2 focus-visible:outline-offset-2',
  ],
  variants: {
    variant: {
      default: '',
      outline: '',
      ghost: ''
    },
    color: {
      default: '',
      brand: '',
      negative: '',
      positive: ''
    },
    size: {
      default: 'text-body rounded-md h-10 py-2 px-3',
      xs: 'text-body-sm rounded-md h-7 py-1 px-2',
      sm: 'text-body-sm rounded-md h-8 py-1.5 px-2.5',
      lg: 'text-body-lg rounded-md h-12 py-3 px-4.5',
      xl: 'text-body-lg rounded-md h-14 py-4 px-6'
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
      className: 'bg-neutral-accent text-inverted-accent-fg hover:bg-neutral-hover'
    },
    {
      variant: 'outline',
      color: 'default',
      className: ''
    },
    {
      variant: 'ghost',
      color: 'default',
      className: ''
    },
    {
      variant: 'default',
      color: 'brand',
      className: 'bg-brand-bold hover:bg-brand-bold-hover active:bg-brand-bold-press text-inverse-fg'
    },
    {
      variant: 'outline',
      color: 'brand',
      className: ''
    },
    {
      variant: 'ghost',
      color: 'brand',
      className: ''
    },
    {
      variant: 'default',
      color: 'negative',
      className: ''
    },
    {
      variant: 'outline',
      color: 'negative',
      className: ''
    },
    {
      variant: 'ghost',
      color: 'negative',
      className: ''
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
