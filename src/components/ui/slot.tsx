import { Slot as SlotPrimitive } from 'radix-ui';
import { ComponentProps } from 'react';

function Slot(props: ComponentProps<typeof SlotPrimitive.Root>) {
  return (
    <SlotPrimitive.Root {...props} />
  );
}

export { Slot };
