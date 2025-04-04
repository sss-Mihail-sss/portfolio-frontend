'use client';

import { ComponentProps } from 'react';
import { DropdownMenu as DropdownMenuPrimitive } from 'radix-ui';
import { Check, ChevronRight, Circle } from 'lucide-react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const dropdownVariants = tv({
  slots: {
    subTrigger: 'focus:bg-accent focus:text-accent-foreground data-[state=open]:bg-accent data-[state=open]:text-accent-foreground flex cursor-default items-center rounded-sm px-2 py-1.5 text-sm outline-hidden select-none',
    subContent: 'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 min-w-[8rem] overflow-hidden rounded-md border p-1 shadow-lg',
    content: 'bg-popover text-popover-foreground data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 z-50 max-h-(--radix-dropdown-menu-content-available-height) min-w-[8rem] overflow-x-hidden overflow-y-auto rounded-md border p-1 shadow-md',
    item: 'focus:bg-accent focus:text-accent-foreground data-[variant=destructive]:text-destructive-foreground data-[variant=destructive]:focus:bg-destructive/10 dark:data-[variant=destructive]:focus:bg-destructive/40 data-[variant=destructive]:focus:text-destructive-foreground data-[variant=destructive]:*:[svg]:!text-destructive-foreground [&_svg:not([class*=\'text-\'])]:text-muted-foreground relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    checkboxItem: 'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    radioItem: 'focus:bg-accent focus:text-accent-foreground relative flex cursor-default items-center gap-2 rounded-sm py-1.5 pr-2 pl-8 text-sm outline-hidden select-none data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    label: 'px-2 py-1.5 text-sm font-medium',
    separator: 'bg-border -mx-1 my-1 h-px',
    shortcut: 'text-muted-foreground ml-auto text-xs tracking-widest',
  },
  variants: {
    inset: {
      true: {
        subTrigger: 'pl-8',
        item: 'pl-8',
        label: 'pl-8',
      },
    },
  },
});

type DropdownProps = VariantProps<typeof dropdownVariants>;

function DropdownMenu(props: ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <DropdownMenuPrimitive.Root data-slot='dropdown-menu' {...props} />
  );
}

function DropdownMenuPortal(props: ComponentProps<typeof DropdownMenuPrimitive.Root>) {
  return (
    <DropdownMenuPrimitive.Portal data-slot='dropdown-menu-portal'  {...props} />
  );
}

function DropdownMenuTrigger(props: ComponentProps<typeof DropdownMenuPrimitive.Trigger>) {
  return (
    <DropdownMenuPrimitive.Trigger data-slot='dropdown-menu-trigger' {...props} />
  );
}

function DropdownMenuGroup(props: ComponentProps<typeof DropdownMenuPrimitive.Group>) {
  return (
    <DropdownMenuPrimitive.Group data-slot='dropdown-menu-group' {...props} />
  );
}

function DropdownMenuSub(props: ComponentProps<typeof DropdownMenuPrimitive.Sub>) {
  return (
    <DropdownMenuPrimitive.Sub data-slot='dropdown-menu-sub' {...props} />
  );
}

const DropdownMenuSubTrigger = ({
  className,
  inset,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubTrigger> & DropdownProps) => {
  const { subTrigger } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.SubTrigger
      data-slot='dropdown-menu-sub-trigger'
      data-inset={inset}
      className={cn(subTrigger(), className)}
      {...props}
    >
      {children}
      <ChevronRight className='ml-auto size-4' />
    </DropdownMenuPrimitive.SubTrigger>
  );
};

const DropdownMenuSubContent = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.SubContent> & DropdownProps) => {
  const { subContent } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.SubContent
      data-slot='dropdown-menu-content'
      className={cn(subContent(), className)}
      {...props}
    />
  );
};

const DropdownMenuContent = ({
  className,
  sideOffset = 4,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Content> & DropdownProps) => {
  const { content } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.Portal>
      <DropdownMenuPrimitive.Content
        data-slot='dropdown-menu-content'
        sideOffset={sideOffset}
        className={cn(content(), className)}
        {...props}
      />
    </DropdownMenuPrimitive.Portal>
  );
};

const DropdownMenuItem = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Item> & DropdownProps) => {
  const { item } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.Item
      data-slot='dropdown-menu-item'
      className={cn(item(), className)}
      {...props}
    />
  );
};

const DropdownMenuCheckboxItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.CheckboxItem> & DropdownProps) => {
  const { checkboxItem } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.CheckboxItem
      data-slot='dropdown-menu-checkbox-item'
      className={cn(checkboxItem(), className)}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Check className='size-4' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.CheckboxItem>
  );
};

function DropdownMenuRadioGroup(props: ComponentProps<typeof DropdownMenuPrimitive.RadioGroup>) {
  return (
    <DropdownMenuPrimitive.RadioGroup data-slot='dropdown-menu-radio-group' {...props} />
  );
}

const DropdownMenuRadioItem = ({
  className,
  children,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.RadioItem> & DropdownProps) => {
  const { radioItem } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.RadioItem
      data-slot='dropdown-menu-radio-item'
      className={cn(radioItem(), className)}
      {...props}
    >
      <span className='pointer-events-none absolute left-2 flex size-3.5 items-center justify-center'>
        <DropdownMenuPrimitive.ItemIndicator>
          <Circle className='size-2 fill-current' />
        </DropdownMenuPrimitive.ItemIndicator>
      </span>
      {children}
    </DropdownMenuPrimitive.RadioItem>
  );
};

const DropdownMenuLabel = ({
  className,
  inset,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Label> & DropdownProps) => {
  const { label } = dropdownVariants({ inset });

  return (
    <DropdownMenuPrimitive.Label data-slot='dropdown-menu-label' className={cn(label(), className)} {...props} />
  );
};

const DropdownMenuSeparator = ({
  className,
  ...props
}: ComponentProps<typeof DropdownMenuPrimitive.Separator> & DropdownProps) => {
  const { separator } = dropdownVariants({});

  return (
    <DropdownMenuPrimitive.Separator
      data-slot='dropdown-menu-separator'
      className={cn(separator(), className)}
      {...props}
    />
  );
};

const DropdownMenuShortcut = ({ className, ...props }: ComponentProps<'span'> & DropdownProps) => {
  const { shortcut } = dropdownVariants({});

  return (
    <span data-slot='dropdown-menu-shortcut' className={cn(shortcut(), className)} {...props} />
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
