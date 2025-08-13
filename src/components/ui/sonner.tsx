/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: need refactor */
'use client';

import type { ToastT } from 'sonner';
import { toast as sonnerToast } from 'sonner';

import { Slot } from '@/ui/slot';

type Toaster = Pick<
  ToastT,
  'id' | 'type' | 'title' | 'description' | 'icon' | 'action' | 'cancel' | 'onDismiss' | 'onAutoClose'
>;

function toast({ onDismiss, onAutoClose, ...props }: Omit<Toaster, 'id'>) {
  return sonnerToast.custom(
    (id) => (
      <Toast
        id={id}
        {...props}
      />
    ),
    {
      onDismiss,
      onAutoClose,
      className: 'font-geist-sans',
    },
  );
}

function Toast({ id, title, description, icon, type, action, cancel }: Omit<Toaster, 'onDismiss' | 'onAutoClose'>) {
  return (
    <div className="flex w-full max-w-full items-center rounded-lg bg-bg p-4 shadow md:w-92">
      {!!icon && <Slot>icon</Slot>}
      <div className="w-full">
        <p className="font-medium text-fg text-xs">{typeof title === 'function' ? title() : title}</p>
        {!!description && (
          <p className="text-muted-fg text-sm">{typeof description === 'function' ? description() : description}</p>
        )}
      </div>
    </div>
  );
}

export { toast };
