import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all font-medium',
    'disabled:bg-neutral-accent disabled:text-inverted-accent-fg disabled:cursor-not-allowed disabled:opacity-30',
    'focus-visible:outline-2 focus-visible:outline-offset-2'
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
      danger: '',
      warning: '',
      success: '',
      info: '',
    },
    size: {
      default: 'rounded-md h-10 py-2 px-3',
      xs: 'text-sm rounded-md h-7 py-1 px-2',
      sm: 'text-sm rounded-md h-8 py-1.5 px-2.5',
      lg: 'text-lg rounded-md h-12 py-3 px-4.5',
      xl: 'text-lg rounded-md h-14 py-4 px-6'
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
      className: 'text-base-subtle hover:bg-neutral-subtle-hover active:bg-neutral-subtle-press'
    },
    {
      variant: 'outline',
      color: 'default',
      className: 'text-base-subtle border border-base hover:bg-neutral-subtle-hover active:bg-neutral-subtle-press'
    },
    {
      variant: 'ghost',
      color: 'default',
      className: 'text-base-subtle hover:bg-neutral-subtle-hover active:bg-neutral-subtle-press'
    },
    {
      variant: 'default',
      color: 'brand',
      className: 'text-base-inverse bg-brand-bold hover:bg-brand-bold-hover active:bg-brand-bold-press'
    },
    {
      variant: 'outline',
      color: 'brand',
      className: 'text-brand border border-brand hover:bg-brand-subtlest-hover active:bg-brand-subtlest-press'
    },
    {
      variant: 'ghost',
      color: 'brand',
      className: 'text-brand hover:bg-brand-subtlest-hover active:bg-brand-subtlest-press'
    },
    {
      variant: 'default',
      color: 'danger',
      className: 'text-base-inverse bg-danger-bold hover:bg-danger-bold-hover active:bg-danger-bold-press'
    },
    {
      variant: 'outline',
      color: 'danger',
      className: 'text-danger border border-danger hover:bg-danger-hover active:bg-danger-press'
    },
    {
      variant: 'ghost',
      color: 'danger',
      className: 'text-danger hover:bg-danger-hover active:bg-danger-press'
    },
    {
      variant: 'default',
      color: 'warning',
      className: 'text-warning-inverse bg-warning-bold hover:bg-warning-bold-hover active:bg-warning-bold-press'
    },
    {
      variant: 'outline',
      color: 'warning',
      className: 'text-warning border border-warning hover:bg-warning-hover active:bg-warning-press'
    },
    {
      variant: 'ghost',
      color: 'warning',
      className: 'text-warning hover:bg-warning-hover active:bg-warning-press'
    },
    {
      variant: 'default',
      color: 'success',
      className: 'text-success bg-success-bold hover:bg-success-bold-hover active:bg-success-bold-press'
    },
    {
      variant: 'outline',
      color: 'success',
      className: ''
    },
    {
      variant: 'ghost',
      color: 'success',
      className: ''
    },
    {
      variant: 'default',
      color: 'info',
      className: ''
    },
    {
      variant: 'outline',
      color: 'info',
      className: ''
    },
    {
      variant: 'ghost',
      color: 'info',
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
