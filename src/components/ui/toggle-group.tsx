'use client';

import { ToggleGroup as ToggleGroupPrimitive } from 'radix-ui';
import { type ComponentProps, createContext, useContext } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';

const toggleGroupVariants = tv({
  slots: {
    root: 'group/toggle-group flex items-center justify-center rounded-md',
    item: 'min-w-0 shrink-0 rounded-none shadow-none focus:z-10 focus-visible:z-10',
  },
  variants: {
    variant: {
      default: {
        root: '',
        item: 'first:rounded-l-md last:rounded-r-md',
      },
      outline: {
        root: '',
        item: 'border-l-0 first:border-l',
      },
    },
    size: {
      default: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    size: 'default',
  },
});

type ToggleGroupVariants = VariantProps<typeof toggleGroupVariants>;

const ToggleGroupContext = createContext<ToggleGroupVariants>({
  size: 'default',
  variant: 'default',
});

const ToggleGroup = ({
  className,
  variant,
  size,
  children,
  ...props
}: ComponentProps<typeof ToggleGroupPrimitive.Root> & ToggleGroupVariants) => {
  const { root } = toggleGroupVariants({ variant, size });

  return (
    <ToggleGroupPrimitive.Root
      data-slot="toggle-group"
      data-variant={variant}
      data-size={size}
      className={cn(root(), className)}
      {...props}
    >
      <ToggleGroupContext.Provider value={{ variant, size }}>{children}</ToggleGroupContext.Provider>
    </ToggleGroupPrimitive.Root>
  );
};

function ToggleGroupItem({ className, children, ...props }: ComponentProps<typeof ToggleGroupPrimitive.Item>) {
  const { variant, size } = useContext(ToggleGroupContext);
  const { item } = toggleGroupVariants({ variant, size });

  return (
    <ToggleGroupPrimitive.Item
      data-slot="toggle-group-item"
      data-variant={variant}
      data-size={size}
      className={cn(item({ variant, size }), className)}
      {...props}
    >
      {children}
    </ToggleGroupPrimitive.Item>
  );
}

export { ToggleGroup, ToggleGroupItem };
