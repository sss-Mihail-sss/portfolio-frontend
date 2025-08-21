'use client';

import { Check, ChevronDown, ChevronsUpDownIcon, ChevronUp } from 'lucide-react';
import { Select as SelectPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';

const selectVariants = tv({
  slots: {
    content: ['relative z-50 max-h-96 min-w-32 overflow-hidden rounded-md border bg-overlay shadow-overlay'],
    viewport: 'p-1',
    label: 'px-2 py-1.5 font-medium text-sm',
    item: "relative flex w-full cursor-default select-none items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg:not([class*='size-'])]:size-4 [&_svg:not([class*='text-'])]:text-muted-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
  },
  variants: {
    position: {
      popper: {
        content:
          'data-[side=left]:-translate-x-1 data-[side=top]:-translate-y-1 data-[side=right]:translate-x-1 data-[side=bottom]:translate-y-1',
        viewport: 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
      },
    },
    side: {
      left: {
        content: 'slide-in-from-right-2',
      },
      right: {
        content: 'slide-in-from-left-2',
      },
      bottom: {
        content: 'slide-in-from-top-2',
      },
      top: {
        content: 'slide-in-from-bottom-2',
      },
    },
  },
});

const Select = ({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) => {
  return (
    <SelectPrimitive.Root
      data-slot="select"
      {...props}
    />
  );
};

const SelectGroup = ({ ...props }: ComponentProps<typeof SelectPrimitive.Group>) => {
  return (
    <SelectPrimitive.Group
      data-slot="select-group"
      {...props}
    />
  );
};

const SelectValue = ({ ...props }: ComponentProps<typeof SelectPrimitive.Value>) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...props}
    />
  );
};

const SelectTrigger = ({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger>) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      className={cn(
        'flex items-center justify-between gap-2 rounded-md border bg-input p-3 text-sm outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronsUpDownIcon className="size-3.5" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
};

const SelectContent = ({
  className,
  children,
  position,
  ...props
}: ComponentProps<typeof SelectPrimitive.Content> & VariantProps<typeof selectVariants>) => {
  const { content, viewport } = selectVariants({ position });

  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        className={cn(content({ position }), className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn(viewport({ position }), 'overflow-auto')}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  );
};

const SelectLabel = ({
  className,
  position,
  ...props
}: ComponentProps<typeof SelectPrimitive.Label> & VariantProps<typeof selectVariants>) => {
  const { label } = selectVariants();

  return (
    <SelectPrimitive.Label
      className={cn(label(), className)}
      {...props}
    />
  );
};

const SelectItem = ({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.SelectItem>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'flex w-full cursor-pointer select-none items-center gap-2 rounded-sm p-1.5 text-sm outline-hidden',
        'focus:bg-neutral-subtle',
        'data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
        className,
      )}
      {...props}
    >
      <span className="size-3.5 shrink-0">
        <SelectPrimitive.ItemIndicator>
          <Check className="size-4" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
};

const SelectSeparator = ({ className, children, ...props }: ComponentProps<typeof SelectPrimitive.SelectSeparator>) => {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn('-mx-1 pointer-events-none my-1 h-px bg-border', className)}
      {...props}
    />
  );
};

const SelectScrollUpButton = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton>) => {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronUp className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  );
};

const SelectScrollDownButton = ({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectScrollDownButton>) => {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn('flex cursor-default items-center justify-center py-1', className)}
      {...props}
    >
      <ChevronDown className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  );
};

export {
  Select,
  SelectGroup,
  SelectValue,
  SelectTrigger,
  SelectContent,
  SelectLabel,
  SelectItem,
  SelectSeparator,
  SelectScrollUpButton,
  SelectScrollDownButton,
};
