import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm cursor-pointer font-medium',
  variants: {
    variant: {
      default: 'bg-primary hover:bg-primary/90 text-primary-foreground',
      outline: 'border border-input bg-background hover:bg-accent text-secondary-foreground hover:text-accent-foreground',
      success: 'bg-success hover:bg-success/90 text-secondary-foreground',
      warning: 'bg-warning hover:bg-warning/90 text-secondary-foreground',
      error: 'bg-error hover:bg-error/90 text-secondary-foreground',
      info: 'bg-info hover:bg-info/90 text-secondary-foreground',
      ghost: 'hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'text-sm h-9 px-6',
      sm: 'text-xs h-7 px-4',
      icon: 'size-9',
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
  const Component = asChild ? Slot : 'button';

  return (
    <Component {...props} className={cn(buttonVariants({ variant, size, className }))} />
  );
};

export { Button, buttonVariants };
export type { ButtonProps };
