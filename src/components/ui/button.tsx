import { ButtonHTMLAttributes } from 'react';
import { Slot } from 'radix-ui';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md cursor-pointer font-medium outline-offset-1 outline-offset-background focus-visible:outline-2 focus-visible:outline-primary disabled:pointer-events-none disabled:opacity-50',
  variants: {
    variant: {
      default: '',
      outline: 'border border-input bg-transparent',
      ghost: '',
    },
    size: {
      default: 'text-sm h-9 px-6',
      sm: 'text-xs h-7 px-4',
      lg: 'h-11 px-6',
      icon: 'size-9',
    },
    color: {
      default: '',
      success: '',
      warning: '',
      error: 'focus-visible:ring-error',
      info: '',
    },
    disabled: {
      true: 'cursor-default opacity-50',
      false: '',
    }
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    color: 'default',
    disabled: false,
  },
  compoundVariants: [
    {
      disabled: false,
      variant: ['outline', 'ghost'],
      className: 'hover:bg-accent hover:text-accent-foreground'
    },
    {
      variant: 'default',
      className: 'bg-primary hover:bg-primary/90 text-primary-foreground',
    },
    {
      variant: 'default',
      color: 'error',
      className: 'bg-error hover:bg-error/90 text-error-foreground',
    },
    {
      variant: 'outline',
      color: 'error',
      className: 'border-error hover:bg-error/40',
    },
    {
      variant: 'default',
      color: 'info',
      className: 'bg-blue-600 hover:bg-blue-600/90',
    },
  ],
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ variant, size, className, color, disabled, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot.Slot : 'button';

  return (
    <Component type='button' {...props} className={cn(buttonVariants({ variant, size, color, disabled, className }))} />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
