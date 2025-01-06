import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';

// inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground h-9 px-4 py-2

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm cursor-pointer font-medium ring-offset-background' +
    'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  variants: {
    variant: {
      default: '',
      outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'text-sm h-9 px-6',
      sm: 'text-xs h-7 px-4',
      icon: 'size-9',
    },
    color: {
      default: '',
      success: '',
      warning: '',
      error: 'focus-visible:ring-error',
      info: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
    color: 'default',
  },
  compoundVariants: [
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
  ],
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> & VariantProps<typeof buttonVariants>

const Button = ({ variant, size, className, color, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component {...props} className={cn(buttonVariants({ variant, size, color, className }))} />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
