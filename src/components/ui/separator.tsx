'use client';

import { ComponentProps } from 'react';
import * as SeparatorPrimitive from '@radix-ui/react-separator';

import { cn } from '@/lib/utils';
import { tv, VariantProps } from 'tailwind-variants';

const separatorVariants = tv({
  base: 'shrink-0 bg-border',
  variants: {
    orientation: {
      horizontal: 'h-[1px] w-full',
      vertical: 'h-full w-[1px]',
    },
  },
});

type SeparatorProps = ComponentProps<typeof SeparatorPrimitive.Root> & VariantProps<typeof separatorVariants>;

const Separator = ({ ref, className, orientation, decorative, ...props }: SeparatorProps) => {
  return (
    <SeparatorPrimitive.Root
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={cn(
        separatorVariants({ orientation }),
        className,
      )}
      {...props}
    />
  );
};

export { Separator };
