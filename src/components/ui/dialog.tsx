'use client';

import { ComponentProps } from 'react';
import * as DialogPrimitive from '@radix-ui/react-dialog';
import { tv } from 'tailwind-variants';
import { X } from 'lucide-react';

import { cn } from '@/lib/utils';

const dialogVariants = tv({
  slots: {
    overlay: 'fixed inset-0 z-50 bg-black/80 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0',
    content: 'bg-background data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 fixed top-[50%] left-[50%] z-50 flex flex-col w-full max-w-[calc(100%-2rem)] translate-x-[-50%] translate-y-[-50%] gap-4 rounded-lg border p-6 shadow-lg duration-200 sm:max-w-lg',
    close: 'ring-offset-background focus:ring-ring data-[state=open]:bg-accent data-[state=open]:text-muted-foreground absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*=\'size-\'])]:size-4',
    header: 'flex flex-col gap-2 text-center sm:text-left',
    footer: 'flex flex-col-reverse gap-2 sm:flex-row sm:justify-end',
    title: 'text-lg leading-none font-semibold tracking-tight',
    description: 'text-muted-foreground text-sm',
  },
});

function Dialog({ ...props }: ComponentProps<typeof DialogPrimitive.Root>) {
  return (
    <DialogPrimitive.Root data-slot='dialog' {...props} />
  );
}

function DialogTrigger({ ...props }: ComponentProps<typeof DialogPrimitive.Trigger>) {
  return <DialogPrimitive.Trigger data-slot='dialog-trigger' {...props} />;
}

function DialogPortal({ ...props }: ComponentProps<typeof DialogPrimitive.Portal>) {
  return (
    <DialogPrimitive.Portal data-slot='dialog-portal' {...props} />
  );
}

function DialogClose({ ...props }: ComponentProps<typeof DialogPrimitive.Close>) {
  return (
    <DialogPrimitive.Close data-slot='dialog-close' {...props} />
  );
}

function DialogOverlay({ className, ...props }: ComponentProps<typeof DialogPrimitive.Overlay>) {
  const { overlay } = dialogVariants();

  return (
    <DialogPrimitive.Overlay data-slot='dialog-overlay' className={cn(overlay(), className)} {...props} />
  );
}

function DialogContent({
  className,
  children,
  ...props
}: ComponentProps<typeof DialogPrimitive.Content>) {
  const { content, close } = dialogVariants();

  return (
    <DialogPortal data-slot='dialog-portal'>
      <DialogOverlay />
      <DialogPrimitive.Content data-slot='dialog-content' className={cn(content(), className)} {...props}>
        {children}
        <DialogPrimitive.Close className={close()}>
          <X />
          <span className='sr-only'>Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  );
}

function DialogHeader({ className, ...props }: ComponentProps<'div'>) {
  const { header } = dialogVariants();

  return (
    <div data-slot='dialog-header' className={cn(header(), className)} {...props} />
  );
}

function DialogFooter({ className, ...props }: ComponentProps<'div'>) {
  const { footer } = dialogVariants();

  return (
    <div data-slot='dialog-footer' className={cn(footer(), className)} {...props} />
  );
}

function DialogTitle({ className, ...props }: ComponentProps<typeof DialogPrimitive.Title>) {
  const { title } = dialogVariants();

  return (
    <DialogPrimitive.Title data-slot='dialog-title' className={cn(title(), className)} {...props} />
  );
}

function DialogDescription({ className, ...props }: ComponentProps<typeof DialogPrimitive.DialogDescription>) {
  const { description } = dialogVariants();

  return (
    <DialogPrimitive.Description data-slot='dialog-description' className={cn(description(), className)} {...props} />
  );
}

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
};
