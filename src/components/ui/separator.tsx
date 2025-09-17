'use client';

import { Separator as SeparatorPrimitive } from 'radix-ui';
import { type ComponentProps } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';

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
      className={cn(separatorVariants({ orientation }), className)}
      {...props}
    />
  );
};

export { Separator };
