import { Menu as MenuPrimitive } from '@base-ui-components/react/menu';
import { type ComponentProps } from 'react';

import { cn, tv } from '@/lib/utils/classnames';

const itemVariants = tv({
  base: [
    'flex cursor-default select-none items-center gap-2 px-4 py-2 text-sm outline-none',
    'data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:before:absolute data-[highlighted]:before:inset-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-neutral-subtle',
    'outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
  ],
  variants: {
    type: {
      default: '',
      radio: '',
      checkbox: '',
    },
  },
  defaultVariants: {
    type: 'default',
  },
});

const Menu = (props: ComponentProps<typeof MenuPrimitive.Root>) => {
  return (
    <MenuPrimitive.Root
      data-slot="menu"
      {...props}
    />
  );
};

const MenuTrigger = (props: ComponentProps<typeof MenuPrimitive.Trigger>) => {
  return (
    <MenuPrimitive.Trigger
      data-slot="menu-trigger"
      {...props}
    />
  );
};

const MenuPortal = (props: ComponentProps<typeof MenuPrimitive.Portal>) => {
  return (
    <MenuPrimitive.Portal
      data-slot="menu-portal"
      {...props}
    />
  );
};

const MenuBackdrop = (props: ComponentProps<typeof MenuPrimitive.Backdrop>) => {
  return (
    <MenuPrimitive.Backdrop
      data-slot="menu-backdrop"
      {...props}
    />
  );
};

const MenuPositioner = (props: ComponentProps<typeof MenuPrimitive.Positioner>) => {
  return (
    <MenuPrimitive.Positioner
      data-slot="menu-positioner"
      sideOffset={8}
      {...props}
    />
  );
};

const MenuPopup = (props: ComponentProps<typeof MenuPrimitive.Popup>) => {
  return (
    <MenuPrimitive.Popup
      data-slot="menu-popup"
      {...props}
    />
  );
};

const MenuArrow = (props: ComponentProps<typeof MenuPrimitive.Arrow>) => {
  return (
    <MenuPrimitive.Arrow
      data-slot="menu-arrow"
      {...props}
    />
  );
};

const MenuItem = ({ className, ...props }: ComponentProps<typeof MenuPrimitive.Item>) => {
  return (
    <MenuPrimitive.Item
      data-slot="menu-item"
      className={cn(itemVariants(), className)}
      {...props}
    />
  );
};

const MenuSubmenu = (props: ComponentProps<typeof MenuPrimitive.SubmenuRoot>) => {
  return (
    <MenuPrimitive.SubmenuRoot
      data-slot="menu-submenu"
      {...props}
    />
  );
};

const MenuSubmenuTrigger = (props: ComponentProps<typeof MenuPrimitive.SubmenuTrigger>) => {
  return (
    <MenuPrimitive.SubmenuTrigger
      data-slot="menu-submenu-trigger"
      {...props}
    />
  );
};

const MenuGroup = (props: ComponentProps<typeof MenuPrimitive.Group>) => {
  return (
    <MenuPrimitive.Group
      data-slot="menu-group"
      {...props}
    />
  );
};

const MenuGroupLabel = (props: ComponentProps<typeof MenuPrimitive.GroupLabel>) => {
  return (
    <MenuPrimitive.GroupLabel
      data-slot="menu-group-label"
      {...props}
    />
  );
};

const MenuRadioGroup = (props: ComponentProps<typeof MenuPrimitive.RadioGroup>) => {
  return (
    <MenuPrimitive.RadioGroup
      data-slot="menu-radio-group"
      {...props}
    />
  );
};

const MenuRadioGroupItem = ({ className, ...props }: ComponentProps<typeof MenuPrimitive.RadioItem>) => {
  return (
    <MenuPrimitive.RadioItem
      data-slot="menu-radio-group-item"
      className={cn(itemVariants({ type: 'radio' }), className)}
      {...props}
    />
  );
};

const MenuRadioGroupItemIndicator = ({
  className,
  ...props
}: ComponentProps<typeof MenuPrimitive.RadioItemIndicator>) => {
  return (
    <MenuPrimitive.RadioItemIndicator
      data-slot="menu-radio-group-item-indicator"
      className={cn('ml-auto inline-flex', className)}
      {...props}
    />
  );
};

const MenuCheckboxItem = ({ className, ...props }: ComponentProps<typeof MenuPrimitive.CheckboxItem>) => {
  return (
    <MenuPrimitive.CheckboxItem
      data-slot="menu-checkbox-item"
      className={cn(itemVariants({ type: 'checkbox' }), className)}
      {...props}
    />
  );
};

const MenuCheckboxItemIndicator = (props: ComponentProps<typeof MenuPrimitive.CheckboxItemIndicator>) => {
  return (
    <MenuPrimitive.CheckboxItemIndicator
      data-slot="menu-checkbox-item-indicator"
      {...props}
    />
  );
};

const MenuSeparator = (props: ComponentProps<typeof MenuPrimitive.Separator>) => {
  return (
    <MenuPrimitive.Separator
      data-slot="menu-separator"
      {...props}
    />
  );
};

const MenuContent = ({ className, ...props }: ComponentProps<typeof MenuPrimitive.Popup>) => {
  return (
    <MenuPortal data-slot="menu-portal">
      <MenuPositioner data-slot="menu-positioner">
        <MenuPopup
          data-slot="menu-popup"
          className={cn(
            'origin-(--transform-origin) rounded-md bg-overlay p-1 shadow-overlay transition-[transform,scale,opacity]',
            'data-[ending-style]:scale-90 data-[starting-style]:scale-90 data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
            className,
          )}
          {...props}
        />
      </MenuPositioner>
    </MenuPortal>
  );
};

export {
  Menu,
  MenuTrigger,
  MenuPortal,
  MenuBackdrop,
  MenuPositioner,
  MenuPopup,
  MenuArrow,
  MenuItem,
  MenuSubmenu,
  MenuSubmenuTrigger,
  MenuGroup,
  MenuGroupLabel,
  MenuRadioGroup,
  MenuRadioGroupItem,
  MenuRadioGroupItemIndicator,
  MenuCheckboxItem,
  MenuCheckboxItemIndicator,
  MenuSeparator,
  // All in one (portal, positioner, popup)
  MenuContent,
};
