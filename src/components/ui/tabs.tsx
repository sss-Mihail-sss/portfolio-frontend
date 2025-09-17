'use client';

import { Tabs as TabsPrimitive } from 'radix-ui';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type TabsProps = ComponentProps<typeof TabsPrimitive.Root>;

function Tabs({ className, children, ...props }: TabsProps) {
  return (
    <TabsPrimitive.Root
      data-slot="tabs"
      className={cn('flex gap-4', className)}
      {...props}
    >
      {children}
    </TabsPrimitive.Root>
  );
}

function TabsList({ className, ...props }: ComponentProps<typeof TabsPrimitive.List>) {
  return (
    <TabsPrimitive.List
      data-slot="tabs-list"
      className={cn(
        'flex',
        'data-[orientation=horizontal]:flex-row data-[orientation=horizontal]:border-b',
        'data-[orientation=vertical]:flex-col data-[orientation=vertical]:border-l',
        className,
      )}
      {...props}
    />
  );
}

function TabsTrigger({ className, ...props }: ComponentProps<typeof TabsPrimitive.Trigger>) {
  return (
    <TabsPrimitive.Trigger
      data-slot="tabs-trigger"
      className={cn(
        'relative flex items-center whitespace-nowrap rounded-sm p-2 font-medium text-muted-fg text-sm hover:text-fg',
        'data-[state=active]:text-fg data-[state=active]:after:absolute data-[state=active]:after:bg-fg',
        'focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1',
        className,
      )}
      {...props}
    />
  );
}

function TabsContent({ className, ...props }: ComponentProps<typeof TabsPrimitive.Content>) {
  return (
    <TabsPrimitive.Content
      className={cn('focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1', className)}
      {...props}
    />
  );
}

export { Tabs, TabsList, TabsTrigger, TabsContent };
export type { TabsProps };
