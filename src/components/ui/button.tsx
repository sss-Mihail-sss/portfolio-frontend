import type { ButtonHTMLAttributes } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';
import { Slot } from '@/ui/slot';

const buttonVariants = tv({
  base: [
    'inline-flex cursor-pointer items-center justify-center gap-2 whitespace-nowrap font-medium transition-all',
    'disabled:pointer-events-none disabled:bg-neutral disabled:text-on-disabled disabled:opacity-30',
    'focus-visible:outline-2 focus-visible:outline-offset-2',
  ],
  variants: {
    variant: {
      default: '',
      outline: 'ring ring-inset',
      ghost: '',
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
      default: 'h-10 rounded-md px-3 py-2',
      xs: 'h-7 rounded-md px-2 py-1 text-sm',
      sm: 'h-8 rounded-md px-2.5 py-1.5 text-sm',
      lg: 'h-12 rounded-md px-4.5 py-3 text-lg',
      xl: 'h-14 rounded-md px-6 py-4 text-lg',
    },
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
      className: 'bg-neutral text-on-neutral hover:bg-neutral-hover active:bg-neutral-press',
    },
    {
      variant: 'outline',
      color: 'default',
      className: 'text-foreground hover:bg-neutral-subtle',
    },
    {
      variant: 'ghost',
      color: 'default',
      className: 'text-foreground hover:bg-neutral-subtle',
    },
    {
      variant: 'default',
      color: 'brand',
      className: 'bg-brand text-on-brand hover:bg-brand-hover active:bg-brand-press',
    },
    {
      variant: 'outline',
      color: 'brand',
      className: 'text-brand ring-brand hover:bg-brand-subtle',
    },
    {
      variant: 'ghost',
      color: 'brand',
      className: 'text-brand hover:bg-brand-subtle',
    },
    {
      variant: 'default',
      color: 'danger',
      className: 'bg-danger text-on-danger hover:bg-danger-hover active:bg-danger-press',
    },
    {
      variant: 'outline',
      color: 'danger',
      className: 'text-danger ring-danger hover:bg-danger-subtle',
    },
    {
      variant: 'ghost',
      color: 'danger',
      className: 'text-danger hover:bg-danger-subtle',
    },
    {
      variant: 'default',
      color: 'warning',
      className: 'bg-warning text-on-warning hover:bg-warning-hover active:bg-warning-press',
    },
    {
      variant: 'outline',
      color: 'warning',
      className: 'text-warning ring-warning hover:bg-warning-subtle',
    },
    {
      variant: 'ghost',
      color: 'warning',
      className: 'text-warning hover:bg-warning-subtle',
    },
    {
      variant: 'default',
      color: 'success',
      className: 'bg-success text-on-success hover:bg-success-hover active:bg-success-press',
    },
    {
      variant: 'outline',
      color: 'success',
      className: 'text-success ring-success hover:bg-success-subtle',
    },
    {
      variant: 'ghost',
      color: 'success',
      className: 'text-success hover:bg-success-subtle',
    },
    {
      variant: 'default',
      color: 'info',
      className: 'bg-info text-on-info hover:bg-info-hover active:bg-info-press',
    },
    {
      variant: 'outline',
      color: 'info',
      className: 'text-info ring-info hover:bg-info-subtle',
    },
    {
      variant: 'ghost',
      color: 'info',
      className: 'text-info hover:bg-info-subtle',
    },
  ],
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants>;

const Button = ({ variant, size, color, className, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="button"
      data-variant={variant}
      data-color={color}
      data-size={size}
      type="button"
      className={cn(buttonVariants({ variant, size, color, className }))}
      {...props}
    />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
