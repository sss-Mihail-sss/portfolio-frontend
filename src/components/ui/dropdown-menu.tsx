'use client';

import { ComponentProps } from 'react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const dropdownVariants = tv({
  slots: {
    subTrigger: 'flex cursor-default gap-2 select-none items-center rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
    subContent: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    content: 'z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2',
    item: 'relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0',
    checkboxItem: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    radioItem: 'relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50',
    label: 'px-2 py-1.5 text-sm font-semibold',
    separator: '-mx-1 my-1 h-px bg-muted',
    shortcut: 'ml-auto text-xs tracking-widest opacity-60',
  },
  variants: {
    inset: {
      true: {
        subTrigger: 'pl-8',
        menuItem: 'pl-8',
        menuLabel: 'pl-8',
      },
    },
  },
});

type DropdownProps = VariantProps<typeof dropdownVariants>;

const DropdownMenu = DropdownMenuPrimitive.Root;

const DropdownMenuTrigger = DropdownMenuPrimitive.Trigger;

const DropdownMenuGroup = DropdownMenuPrimitive.Group;

const DropdownMenuPortal = DropdownMenuPrimitive.Portal;

const DropdownMenuSub = DropdownMenuPrimitive.Sub;

const DropdownMenuRadioGroup = DropdownMenuPrimitive.RadioGroup;

type DropdownMenuSubTriggerProps = ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & DropdownProps;

const DropdownMenuSubTrigger = ({ ref, className, inset, children, ...props }: DropdownMenuSubTriggerProps) => {
  const { subTrigger } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.SubTrigger ref={ref} className={cn(subTrigger(), className)} {...props}>
      {children}
      <ChevronRight className="ml-auto" />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

type DropdownMenuSubContentProps = ComponentProps<typeof DropdownMenuPrimitive.SubContent> & DropdownProps;

const DropdownMenuSubContent = ({ ref, className, ...props }: DropdownMenuSubContentProps) => {
  const { subContent } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.SubContent ref={ref} className={cn(subContent(), className)} {...props} />
  );
};

type DropdownMenuContentProps = ComponentProps<typeof DropdownMenuPrimitive.Content> & DropdownProps;

const DropdownMenuContent = ({ ref, className, ...props }: DropdownMenuContentProps) => {
  const { content } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content ref={ref} className={cn(content(), className)} {...props} />
    </DropdownMenuPrimitive.Portal>
  );
};

type DropdownMenuItemProps = ComponentProps<typeof DropdownMenuPrimitive.Item> & DropdownProps;

const DropdownMenuItem = ({ ref, className, inset, ...props }: DropdownMenuItemProps) => {
  const { item } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.Item ref={ref} className={cn(item(), className)} {...props} />
  );
};

type DropdownMenuCheckboxItemProps = ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & DropdownProps;

const DropdownMenuCheckboxItem = ({ ref, className, children, ...props }: DropdownMenuCheckboxItemProps) => {
  const { checkboxItem } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.CheckboxItem ref={ref} className={cn(checkboxItem(), className)} {...props}>
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className="h-4 w-4" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

type DropdownMenuRadioItemProps = ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & DropdownProps;

const DropdownMenuRadioItem = ({ ref, className, children, ...props }: DropdownMenuRadioItemProps) => {
  const { radioItem } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.RadioItem ref={ref} className={cn(radioItem(), className)} {...props} >
      <span className="absolute left-2 flex h-3.5 w-3.5 items-center justify-center">
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className="h-2 w-2 fill-current" />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

type DropdownMenuLabelProps = ComponentProps<typeof DropdownMenuPrimitive.Label> & DropdownProps;

const DropdownMenuLabel = ({ ref, className, inset, ...props }: DropdownMenuLabelProps) => {
  const { label } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.Label ref={ref} className={cn(label(), className)} {...props} />
  );
};

type DropdownMenuSeparatorProps = ComponentProps<typeof DropdownMenuPrimitive.Separator> & DropdownProps;

const DropdownMenuSeparator = ({ ref, className, ...props }: DropdownMenuSeparatorProps) => {
  const { separator } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.Separator ref={ref} className={cn(separator(), className)} {...props} />
  );
};

type DropdownMenuShortcutProps = ComponentProps<'span'> & DropdownProps;

const DropdownMenuShortcut = ({ className, ...props }: DropdownMenuShortcutProps) => {
  const { shortcut } = dropdownVariants({});

  return (
    <span className={cn(shortcut(), className)} {...props} />
  );
};

export {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuGroup,
  DropdownMenuPortal,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuRadioGroup,
};
