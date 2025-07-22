'use client';

import { ComponentProps } from 'react';
import { Collapsible as CollapsiblePrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Collapsible({ ...props }: ComponentProps<typeof CollapsiblePrimitive.Root>) {
  return (
    <CollapsiblePrimitive.Root data-slot='collapsible' {...props} />
  );
}

function CollapsibleTrigger({ ...props }: ComponentProps<typeof CollapsiblePrimitive.CollapsibleTrigger>) {
  return (
    <CollapsiblePrimitive.CollapsibleTrigger data-slot='collapsible-trigger' {...props} />
  );
}

function CollapsibleContent({ className, ...props }: ComponentProps<typeof CollapsiblePrimitive.CollapsibleContent>) {
  return (
    <CollapsiblePrimitive.CollapsibleContent
      data-slot='collapsible-content'
      className={cn('overflow-hidden data-[state=open]:animate-collapsible-down data-[state=closed]:animate-collapsible-up', className)}
      {...props}
    />
  );
}

export { Collapsible, CollapsibleTrigger, CollapsibleContent };
