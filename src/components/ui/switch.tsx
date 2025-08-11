import { Switch as SwitchPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';

type SwitchProps = ComponentProps<typeof SwitchPrimitive.Root>;

function Switch({ className, ...props }: SwitchProps) {
  return (
    <SwitchPrimitive.Root
      data-slot="switch"
      className={cn(
        'peer w-10 h-6 shrink-0 rounded-full bg-base-input-off transition-colors data-[state=checked]:bg-base-input-on',
        'disabled:data-[state=checked]:bg-neutral-accent',
        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-base-border-input-focus',
        'disabled:opacity-40',
        className,
      )}
      {...props}
    >
      <SwitchPrimitive.Thumb
        data-slot="switch-thumb"
        className="block size-4.5 rounded-full bg-white-accent-fg transition-transform translate-x-0.5 data-[state=checked]:translate-x-5 disabled:data-[state=checked]:bg-inverse-accent-fg"
      />
    </SwitchPrimitive.Root>
  );
}

export { Switch };
export type { SwitchProps };
