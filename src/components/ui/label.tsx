'use client';

import * as React from 'react';
import { ComponentProps } from 'react';
import * as LabelPrimitive from '@radix-ui/react-label';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const labelVariants = tv({
  base: 'text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70',
});

type LabelProps = ComponentProps<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>;

const Label = ({ ref, className, ...props }: LabelProps) => {
  return (
    <LabelPrimitive.Root ref={ref} className={cn(labelVariants(), className)} {...props} />
  );
};

export { Label, type LabelProps };
