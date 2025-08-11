'use client';

import { Toggle as TogglePrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils';

const toggleVariants = tv({
  base: "inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium transition-colors hover:bg-muted hover:text-muted-foreground disabled:pointer-events-none disabled:opacity-50 data-[state=on]:bg-accent data-[state=on]:text-accent-foreground [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 [&_svg]:shrink-0 ring-ring/10 dark:ring-ring/20 dark:outline-ring/40 outline-ring/50 focus-visible:ring-4 focus-visible:outline-1 aria-invalid:focus-visible:ring-0 transition-[color,box-shadow]",
  variants: {
    variant: {
      default: 'bg-transparent',
      outline: 'border border-input bg-transparent shadow-sx hover:bg-accent hover:text-accent-foreground',
    },
    size: {
      default: 'h-9 px-2 min-w-9',
      sm: 'text-xs h-8 px-1.5 min-w-8',
      lg: 'h-10 px-2.5 min-w-10',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ToggleProps = ComponentProps<typeof TogglePrimitive.Root> & VariantProps<typeof toggleVariants>;

function Toggle({ className, variant, size, ...props }: ToggleProps) {
  return (
    <TogglePrimitive.Root
      data-slot="toggle"
      className={cn(toggleVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Toggle, toggleVariants };
