'use client';

import { Toggle as TogglePrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const toggleVariants = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md font-medium text-sm outline-ring/50 ring-ring/10 transition-[color,box-shadow] transition-colors hover:bg-muted hover:text-muted-foreground focus-visible:outline-1 focus-visible:ring-4 disabled:pointer-events-none disabled:opacity-50 aria-invalid:focus-visible:ring-0 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground dark:outline-ring/40 dark:ring-ring/20 [&_svg:not([class*='size-'])]:size-4 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent shadow-sx hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-9 min-w-9 px-2',
      sm: 'h-8 min-w-8 px-1.5 text-xs',
      lg: 'h-10 min-w-10 px-2.5',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>;

const Toggle = ({ className, variant, size, ...props }: ToggleProps) => {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
};

export { Toggle, toggleVariants };
