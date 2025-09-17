import { type ButtonHTMLAttributes } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';
import { baseButtonVariants } from '@/ui/button';
import { Slot } from '@/ui/slot';

const iconButtonVariants = tv({
  base: '',
  extend: baseButtonVariants,
  variants: {
    size: {
      default: 'size-10 rounded-md',
      xs: 'size-7 rounded-md',
      sm: 'size-8 rounded-md',
      lg: 'size-12 rounded-md',
      xl: 'size-14 rounded-md',
    },
  },
});

type ButtonProps = {
  asChild?: boolean;
} & ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof iconButtonVariants>;

const IconButton = ({ variant, size, color, className, asChild, ...props }: ButtonProps) => {
  const Component = asChild ? Slot : 'button';

  return (
    <Component
      data-slot="icon-button"
      data-size={size}
      data-color={color}
      data-variant={variant}
      className={cn(iconButtonVariants({ variant, size, color }), className)}
      {...props}
    />
  );
};

export { IconButton };
