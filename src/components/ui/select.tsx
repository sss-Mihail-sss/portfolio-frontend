'use client';

import { ComponentProps, Fragment } from 'react';
import { Select as SelectPrimitive} from 'radix-ui';
import { Check, ChevronDown, ChevronUp } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const selectVariants = tv({
  slots: {
    trigger: 'border-input data-[placeholder]:text-muted-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive flex h-9 w-full items-center justify-between rounded-md border bg-transparent px-3 py-2 text-sm transition-[color,box-shadow] outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 [&>span]:line-clamp-1',
    content: 'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 relative z-50 max-h-96 min-w-[8rem] overflow-hidden rounded-md border shadow-md',
    viewport: 'p-1',
    label: 'px-2 py-1.5 text-sm font-medium',
    item: 'focus:bg-accent focus:text-accent-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex w-full cursor-default items-center gap-2 rounded-sm py-1.5 pr-8 pl-2 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2',
    separator: 'bg-border pointer-events-none -mx-1 my-1 h-px',
    up: 'flex cursor-default items-center justify-center py-1',
    bottom: 'flex cursor-default items-center justify-center py-1',
  },
  variants: {
    position: {
      popper: {
        content: 'data-[side=bottom]:translate-y-1 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1',
        viewport: 'h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1',
      },
    },
    variant: {
      default: {
        trigger: 'border-input',
      },
      ghost: {
        trigger: '',
      },
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

function Select({ ...props }: ComponentProps<typeof SelectPrimitive.Root>) {
  return (
    <SelectPrimitive.Root data-slot='select' {...props} />
  );
}

function SelectGroup({ ...props }: ComponentProps<typeof SelectPrimitive.Group>) {
  return (
    <SelectPrimitive.Group data-slot='select-group' {...props} />
  );
}

function SelectValue({ ...props }: ComponentProps<typeof SelectPrimitive.Value>) {
  return (
    <SelectPrimitive.Value data-slot='select-value' {...props} />
  );
}

function SelectTrigger({
  className,
  children,
  variant,
  ...props
}: ComponentProps<typeof SelectPrimitive.Trigger> & VariantProps<typeof selectVariants>) {
  const { trigger } = selectVariants({ variant });

  return (
    <SelectPrimitive.Trigger data-slot='select-trigger' className={cn(trigger({ variant }), className)} {...props}>
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDown className='size-4 opacity-50' />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  );
}

function SelectContent({
  className,
  children,
  position,
  portal = true,
  ...props
}: ComponentProps<typeof SelectPrimitive.Content> & VariantProps<typeof selectVariants> & { portal?: boolean}) {
  const { content, viewport } = selectVariants({ position });

  const Component = portal ? SelectPrimitive.Portal : Fragment;

  return (
    <Component>
      <SelectPrimitive.Content
        data-slot='select-content'
        className={cn(content({ position }), className)}
        position={position}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport className={cn(viewport({ position }))}>
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </Component>
  );
}

function SelectLabel({
  className,
  position,
  ...props
}: ComponentProps<typeof SelectPrimitive.Label> & VariantProps<typeof selectVariants>) {
  const { label } = selectVariants();

  return (
    <SelectPrimitive.Label className={cn(label(), className)} {...props} />
  );
}

function SelectItem({
  className,
  children,
  position,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectItem> & VariantProps<typeof selectVariants>) {
  const { item } = selectVariants();

  return (
    <SelectPrimitive.Item data-slot='select-item' className={cn(item(), className)} {...props}>
      <span className='absolute right-2 flex size-3.5 items-center justify-center'>
        <SelectPrimitive.ItemIndicator>
          <Check className='size-4' />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  );
}

function SelectSeparator({
  className,
  children,
  position,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectSeparator> & VariantProps<typeof selectVariants>) {
  const { separator } = selectVariants();

  return (
    <SelectPrimitive.Separator data-slot='select-separator' className={cn(separator(), className)} {...props} />
  );
}

function SelectScrollUpButton({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.ScrollUpButton> & VariantProps<typeof selectVariants>) {
  const { up } = selectVariants();

  return (
    <SelectPrimitive.ScrollUpButton data-slot='select-scroll-up-button' className={cn(up(), className)} {...props}>
      <ChevronUp className='size-4' />
    </SelectPrimitive.ScrollUpButton>
  );
}

function SelectScrollDownButton({
  className,
  children,
  ...props
}: ComponentProps<typeof SelectPrimitive.SelectScrollDownButton> & VariantProps<typeof selectVariants>) {
  const { bottom } = selectVariants();

  return (
    <SelectPrimitive.ScrollDownButton
      data-slot='select-scroll-down-button'
      className={cn(bottom(), className)}
      {...props}
    >
      <ChevronDown className='size-4' />
    </SelectPrimitive.ScrollDownButton>
  );
}

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
