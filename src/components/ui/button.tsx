import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const buttonVariants = tv({
  base: [
    'inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all font-medium cursor-pointer',
    'disabled:pointer-events-none disabled:text-on-disabled disabled:bg-neutral disabled:opacity-30',
    'focus-visible:outline-2 focus-visible:outline-offset-2'
  ],
  variants: {
    variant: {
      default: '',
      outline: 'ring ring-inset',
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
  },
  compoundVariants: [
    {
      variant: 'default',
      color: 'default',
      className: 'text-on-neutral bg-neutral hover:bg-neutral-hover active:bg-neutral-press'
    },
    {
      variant: 'outline',
      color: 'default',
      className: 'text-foreground hover:bg-neutral-subtle'
    },
    {
      variant: 'ghost',
      color: 'default',
      className: 'text-foreground hover:bg-neutral-subtle'
    },
    {
      variant: 'default',
      color: 'brand',
      className: 'text-on-brand bg-brand hover:bg-brand-hover active:bg-brand-press'
    },
    {
      variant: 'outline',
      color: 'brand',
      className: 'text-brand ring-brand hover:bg-brand-subtle'
    },
    {
      variant: 'ghost',
      color: 'brand',
      className: 'text-brand hover:bg-brand-subtle'
    },
    {
      variant: 'default',
      color: 'danger',
      className: 'text-on-danger bg-danger hover:bg-danger-hover active:bg-danger-press'
    },
    {
      variant: 'outline',
      color: 'danger',
      className: 'text-danger ring-danger hover:bg-danger-subtle'
    },
    {
      variant: 'ghost',
      color: 'danger',
      className: 'text-danger hover:bg-danger-subtle'
    },
    {
      variant: 'default',
      color: 'warning',
      className: 'text-on-warning bg-warning hover:bg-warning-hover active:bg-warning-press'
    },
    {
      variant: 'outline',
      color: 'warning',
      className: 'text-warning ring-warning hover:bg-warning-subtle'
    },
    {
      variant: 'ghost',
      color: 'warning',
      className: 'text-warning hover:bg-warning-subtle'
    },
    {
      variant: 'default',
      color: 'success',
      className: 'text-on-success bg-success hover:bg-success-hover active:bg-success-press'
    },
    {
      variant: 'outline',
      color: 'success',
      className: 'text-success ring-success hover:bg-success-subtle'
    },
    {
      variant: 'ghost',
      color: 'success',
      className: 'text-success hover:bg-success-subtle'
    },
    {
      variant: 'default',
      color: 'info',
      className: 'text-on-info bg-info hover:bg-info-hover active:bg-info-press'
    },
    {
      variant: 'outline',
      color: 'info',
      className: 'text-info ring-info hover:bg-info-subtle'
    },
    {
      variant: 'ghost',
      color: 'info',
      className: 'text-info hover:bg-info-subtle'
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
