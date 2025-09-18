import { Select as SelectPrimitive } from '@base-ui-components/react/select';
import { CheckIcon, ChevronUpIcon } from 'lucide-react';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

const Select = (props: ComponentProps<typeof SelectPrimitive.Root>) => {
  return (
    <SelectPrimitive.Root
      data-slot="select"
      {...props}
    />
  );
};

const SelectTrigger = ({ children, ...props }: ComponentProps<typeof SelectPrimitive.Trigger>) => {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      {...props}
    >
      {children}
    </SelectPrimitive.Trigger>
  );
};

const SelectValue = (props: ComponentProps<typeof SelectPrimitive.Value>) => {
  return (
    <SelectPrimitive.Value
      data-slot="select-value"
      {...props}
    />
  );
};

const SelectContent = ({ className, ...props }: ComponentProps<typeof SelectPrimitive.Popup>) => {
  return (
    <SelectPrimitive.Portal data-slot="select-portal">
      <SelectPrimitive.Positioner
        data-slot="select-positioner"
        className="z-10 select-none outline-none"
        sideOffset={8}
        alignItemWithTrigger={false}
      >
        <SelectPrimitive.ScrollUpArrow className="top-0 z-1 flex w-full cursor-default items-center justify-center rounded-md bg-[canvas] p-1 text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]">
          <ChevronUpIcon />
        </SelectPrimitive.ScrollUpArrow>
        <SelectPrimitive.Popup
          className={cn(
            'group overflow-y-auto rounded bg-overlay p-1 shadow-overlay',
            'max-h-(--available-height) origin-(--transform-origin)',
            'transition',
            'data-[ending-style]:scale-90 data-[ending-style]:opacity-0',
            'data-[starting-style]:scale-90 data-[starting-style]:opacity-0',
            'data-[side=none]:scroll-py-5',
            'data-[side=none]:data-[ending-style]:transition-none',
            'data-[side=none]:data-[starting-style]:scale-100',
            'data-[side=none]:data-[starting-style]:opacity-100 data-[side=none]:data-[starting-style]:transition-none',
            className,
          )}
          {...props}
        />
        <SelectPrimitive.ScrollDownArrow className="bottom-0 z-[1] flex h-4 w-full cursor-default items-center justify-center rounded-md bg-[canvas] text-center text-xs before:absolute before:top-[-100%] before:left-0 before:h-full before:w-full before:content-[''] data-[direction=down]:bottom-0 data-[direction=down]:before:bottom-[-100%]" />
      </SelectPrimitive.Positioner>
    </SelectPrimitive.Portal>
  );
};

const SelectItem = ({ children, className, ...props }: ComponentProps<typeof SelectPrimitive.Item>) => {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        'flex cursor-default select-none items-center gap-2 rounded-sm p-2 text-sm',
        'max-h-(--available-height) max-w-(--available-width)',
        'pointer-coarse:text-[0.925rem]',
        'outline-focus focus-visible:outline-2 focus-visible:outline-ring focus-visible:outline-offset-1',
        'data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-sm data-[highlighted]:before:absolute data-[highlighted]:before:inset-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-neutral-subtle',
        className,
      )}
      {...props}
    >
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
      <SelectPrimitive.ItemIndicator className="ml-auto">
        <CheckIcon className="size-3" />
      </SelectPrimitive.ItemIndicator>
    </SelectPrimitive.Item>
  );
};

export { Select, SelectTrigger, SelectValue, SelectContent, SelectItem };
