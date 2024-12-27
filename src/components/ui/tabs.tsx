'use client';

import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const tabsVariants = tv({
  slots: {
    list: 'inline-flex h-9 items-center justify-center rounded-lg bg-muted p-1 text-muted-foreground',
    trigger: 'inline-flex items-center justify-center whitespace-nowrap rounded-md px-3 py-1 text-sm font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow',
    content: 'mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
  },
});

const Tabs = TabsPrimitive.Root;

type TabsListProps = React.ComponentProps<typeof TabsPrimitive.List> & VariantProps<typeof tabsVariants>;

const TabsList = ({ ref, className, ...props }: TabsListProps) => {
  const { list } = tabsVariants();

  return (
    <TabsPrimitive.List ref={ref} className={cn(list(), className)} {...props} />
  );
};

type TabsTriggerProps = React.ComponentProps<typeof TabsPrimitive.Trigger> & VariantProps<typeof tabsVariants>;

const TabsTrigger = ({ ref, className, ...props }: TabsTriggerProps) => {
  const { trigger } = tabsVariants();

  return (
    <TabsPrimitive.Trigger ref={ref} className={cn(trigger(), className)} {...props} />
  );
};

type TabsContentProps = React.ComponentProps<typeof TabsPrimitive.Content> & VariantProps<typeof tabsVariants>;

const TabsContent = ({ ref, className, ...props }: TabsContentProps) => {
  const { content } = tabsVariants();

  return (
    <TabsPrimitive.Content ref={ref} className={cn(content(), className)} {...props} />
  );
};

export { Tabs, TabsList, TabsTrigger, TabsContent };
