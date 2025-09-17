import { NavigationMenu as NavigationMenuPrimitive } from '@base-ui-components/react/navigation-menu';
import { ChevronDownIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

import { cn, tv } from '@/lib/utils/classnames';

const NavigationMenu = ({ children, className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Root>) => {
  return (
    <NavigationMenuPrimitive.Root
      data-slot="navigation-menu"
      className={cn('group/navigation-menu relative z-10 flex max-w-max flex-1 items-center justify-center', className)}
      {...props}
    >
      {children}

      <NavigationMenuPrimitive.Portal>
        <NavigationMenuPositioner
          sideOffset={10}
          collisionPadding={{ top: 5, bottom: 5, left: 20, right: 20 }}
          collisionAvoidance={{ side: 'none' }}
        >
          <NavigationMenuPopup>
            <NavigationMenuArrow>t</NavigationMenuArrow>
            <NavigationMenuPrimitive.Viewport className="relative h-full w-full overflow-hidden" />
          </NavigationMenuPopup>
        </NavigationMenuPositioner>
      </NavigationMenuPrimitive.Portal>
    </NavigationMenuPrimitive.Root>
  );
};

const navigationMenuPositionerVariants = tv({
  base: [
    "transition duration-500 before:absolute before:content-['']",
    'h-(--positioner-height) w-(--positioner-width) max-w-(--available-width)',
  ],
  variants: {
    side: {
      top: 'before:right-0 before:bottom-[-10px] before:left-0 before:h-2.5',
      bottom: 'before:top-[-10px] before:right-0 before:left-0 before:h-2.5',
      left: 'before:top-0 before:right-[-10px] before:bottom-0 before:w-2.5',
      right: 'before:top-0 before:bottom-0 before:left-[-10px] before:w-2.5',
      'inline-end': '',
      'inline-start': '',
    },
  },
});

const NavigationMenuPositioner = ({
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Positioner>) => {
  return (
    <NavigationMenuPrimitive.Positioner
      data-slot="navigation-menu-positioner"
      className={cn(navigationMenuPositionerVariants({ side: props.side }), className)}
      {...props}
    />
  );
};

const navigationMenuPopupVariants = tv({
  base: [
    'relative rounded-lg bg-overlay text-neutral-subtlest shadow-overlay transition-all duration-500',
    'h-(--popup-height) w-(--popup-width) origin-(--transform-origin)',
    'data-[ending-style]:easing-[ease] data-[ending-style]:scale-90 data-[ending-style]:opacity-0 data-[ending-style]:duration-150',
    'data-[starting-style]:scale-90 data-[starting-style]:opacity-0',
  ],
});

const NavigationMenuPopup = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Popup>) => {
  return (
    <NavigationMenuPrimitive.Popup
      data-slot="navigation-menu-popup"
      className={cn(navigationMenuPopupVariants(), className)}
      {...props}
    />
  );
};

const navigationMenuArrowVariants = tv({
  base: [
    'flex transition-all duration-500',
    'data-[side=bottom]:top-[-8px]',
    'data-[side=left]:right-[-13px] data-[side=left]:rotate-90',
    'data-[side=right]:-rotate-90 data-[side=right]:left-[-13px]',
    'data-[side=top]:bottom-[-8px] data-[side=top]:rotate-180'
  ],
  variants: {
    side: {
      top: 'bottom-[-8px] rotate-180',
      bottom: 'top-[-8px]',
      left: 'right-[-13px] rotate-90',
      right: '-rotate-90 left-[-13px]',
    }
  }
})

const NavigationMenuArrow = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Arrow>) => {
  return (
    <NavigationMenuPrimitive.Arrow
      data-slot="navigation-menu-arrow"
      className={cn(navigationMenuArrowVariants(), className)}
      {...props}
    />
  );
};

const NavigationMenuList = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.List>) => {
  return (
    <NavigationMenuPrimitive.List
      data-slot="navigation-menu-list"
      className={cn('group flex list-none items-center justify-center gap-2', className)}
      {...props}
    />
  );
};

const NavigationMenuItem = (props: ComponentProps<typeof NavigationMenuPrimitive.Item>) => {
  return (
    <NavigationMenuPrimitive.Item
      data-slot="navigation-menu-item"
      {...props}
    />
  );
};

const NavigationMenuTrigger = ({
  children,
  className,
  ...props
}: ComponentProps<typeof NavigationMenuPrimitive.Trigger>) => {
  return (
    <NavigationMenuPrimitive.Trigger
      data-slot="navigation-menu-trigger"
      className={cn(
        'flex h-10 items-center justify-center gap-1.5 px-4 py-2',
        'hover:bg-neutral-hover hover:text-base',
        'disabled:pointer-events-none disabled:opacity-50',
        'outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      {...props}
    >
      {children}
      <NavigationMenuIcon />
    </NavigationMenuPrimitive.Trigger>
  );
};

const NavigationMenuContent = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Content>) => {
  return (
    <NavigationMenuPrimitive.Content
      data-slot="navigation-menu-content"
      className={cn(
        // 'h-full w-full xs:w-max bg-overlay px-4 py-2 shadow-overlay',
        'h-full w-full xs:w-max px-4 py-2',
        'transition duration-300',
        'data-[ending-style]:opacity-0 data-[starting-style]:opacity-0',
        'data-[starting-style]:data-[activation-direction=left]:translate-x-[-50%]',
        'data-[starting-style]:data-[activation-direction=right]:translate-x-[50%]',
        'data-[ending-style]:data-[activation-direction=left]:translate-x-[50%]',
        'data-[ending-style]:data-[activation-direction=right]:translate-x-[-50%]',
        className,
      )}
      {...props}
    />
  );
};

const NavigationMenuIcon = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Icon>) => {
  return (
    <NavigationMenuPrimitive.Icon
      data-slot="navigation-menu-icon"
      className={cn('transition-transform duration-200 ease-in-out data-[popup-open]:rotate-180', className)}
      {...props}
    >
      <ChevronDownIcon aria-hidden="true" />
    </NavigationMenuPrimitive.Icon>
  );
};

const NavigationMenuLink = ({ className, ...props }: ComponentProps<typeof NavigationMenuPrimitive.Link>) => {
  return (
    <NavigationMenuPrimitive.Link
      data-slot="navigation-menu-icon"
      className={cn(
        'flex h-10 items-center justify-center gap-1.5 px-4 py-2',
        'hover:bg-neutral-hover hover:text-base',
        'disabled:pointer-events-none disabled:opacity-50',
        'outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      {...props}
    />
  );
};

export {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuTrigger,
  NavigationMenuIcon,
  NavigationMenuLink,
};
