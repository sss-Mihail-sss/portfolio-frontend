'use client';

import { ComponentProps } from 'react';
import { Tabs as TabsPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

function Tabs({ className, children, ...props }: ComponentProps<typeof TabsPrimitive.Root>) {
  return (
    <TabsPrimitive.Root
      data-slot='tabs'
      className={cn(
        'flex gap-4 data-[orientation=horizontal]:flex-col data-[orientation=vertical]:flex-row',
        className
      )}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot='tabs-list'
      className={cn(
        'flex',
        'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b',
        'data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-l',
        className
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot='tabs-trigger'
      className={cn(
        'relative p-2 flex items-center text-sm font-medium whitespace-nowrap rounded-sm text-muted-fg hover:text-fg',
        'data-[state=active]:text-fg data-[state=active]:after:absolute data-[state=active]:after:bg-fg',
        'focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-1',
        className
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn('focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-1', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
