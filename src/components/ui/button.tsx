import { ButtonHTMLAttributes } from 'react';
import { Slot } from '@radix-ui/react-slot';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';

const buttonVariants = tv({
  base: 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm cursor-pointer font-medium',
  variants: {
    variant: {
      default: '',
      outline: 'outline-2 outline-primary',
      ghost: 'bg-transparent hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'text-sm h-9 px-6',
      sm: 'text-xs h-7 px-4',
      icon: 'size-9',
    },
    color: {
      default: 'bg-primary hover:bg-primary/90 text-foreground hover:text-foreground',
      success: '',
      warning: '',
      error: '',
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
      variant: ['outline', 'ghost'],
      className: 'bg-background',
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
