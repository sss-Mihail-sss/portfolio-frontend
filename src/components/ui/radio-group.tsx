import { ComponentProps } from 'react';
import { RadioGroup as RadioGroupPrimitive } from 'radix-ui';

import { cn } from '@/lib/utils';

type RadioGroupProps = ComponentProps<typeof RadioGroupPrimitive.Root>;

function RadioGroup({ className, ...props }: RadioGroupProps) {
  return (
    <RadioGroupPrimitive.Root
      data-slot='radio-group'
      className={cn(
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-primary-accent',
        className
      )}
      {...props}
    />
  );
}

type RadioGroupItemProps = ComponentProps<typeof RadioGroupPrimitive.Item>;

function RadioGroupItem({ className, ...props }: RadioGroupItemProps) {
  return (
    <RadioGroupPrimitive.Item
      data-slot='radio-group-item'
      className={cn(
        'peer size-4.5 shrink-0 border rounded-full',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-focus',
        'data-[state=checked]:border-focus',
        'disabled:opacity-40 disabled:data-[state=checked]:border-disabled',
        className
      )}
      {...props}
    >
      <RadioGroupPrimitive.Indicator
        data-slot='radio-group-indicator'
        className='flex size-full border-5 border-focus rounded-full data-[disabled]:border-disabled'
      />
    </RadioGroupPrimitive.Item>
  );
}

export { RadioGroup, RadioGroupItem };
export type { RadioGroupProps, RadioGroupItemProps };
