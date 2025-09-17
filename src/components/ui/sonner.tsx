/** biome-ignore-all lint/correctness/noUnusedFunctionParameters: need refactor */
'use client';

import { type ToastT } from 'sonner';
import { toast as sonnerToast } from 'sonner';

import { cn, tv } from '@/lib/utils/classnames';
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

const toastVariants = tv({
  slots: {
    root: 'flex w-full max-w-full items-center gap-2 rounded-lg bg-overlay p-4 shadow-overlay md:w-92',
    icon: 'size-6 shrink-0',
    title: 'font-semibold text-sm',
    description: 'text-muted text-sm',
  },
  variants: {
    type: {
      default: {
        root: '',
      },
      normal: '',
      action: '',
      success: '',
      info: '',
      warning: '',
      error: {
        root: '',
        title: 'text-danger',
      },
      loading: '',
    },
  },
});

function Toast({ id, title, description, icon, type, action, cancel }: Omit<Toaster, 'onDismiss' | 'onAutoClose'>) {
  const styles = toastVariants({ type });

  return (
    <div className={cn(styles.root())}>
      {!!icon && <Slot className={cn(styles.icon())}>{icon}</Slot>}
      <div className="w-full">
        <p className={styles.title()}>{typeof title === 'function' ? title() : title}</p>
        {!!description && (
          <p className={styles.description()}>{typeof description === 'function' ? description() : description}</p>
        )}
      </div>
    </div>
  );
}

export { toast };
