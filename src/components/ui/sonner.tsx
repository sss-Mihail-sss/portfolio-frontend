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
    <div className="flex rounded-lg bg-bg shadow w-full md:w-92 max-w-full items-center p-4">
      {!!icon && <Slot>icon</Slot>}
      <div className="w-full">
        <p className="text-xs font-medium text-fg">{typeof title === 'function' ? title() : title}</p>
        {!!description && (
          <p className="text-sm text-muted-fg">{typeof description === 'function' ? description() : description}</p>
        )}
      </div>
    </div>
  );
}

export { toast };
