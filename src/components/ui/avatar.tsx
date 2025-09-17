'use client';

import { Avatar as AvatarPrimitive } from 'radix-ui';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type AvatarRootProps = ComponentProps<typeof AvatarPrimitive.Root>;

const Avatar = ({ className, ...props }: AvatarRootProps) => {
  return (
    <AvatarPrimitive.Root
      data-slot="avatar"
      className={cn('relative flex size-10 shrink-0 overflow-hidden rounded-full', className)}
      {...props}
    />
  );
};

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image>;

const AvatarImage = ({ className, ...props }: AvatarImageProps) => {
  return (
    <AvatarPrimitive.Image
      data-slot="avatar-image"
      className={cn('aspect-square h-full w-full', className)}
      {...props}
    />
  );
};

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback>;

const AvatarFallback = ({ className, ...props }: AvatarFallbackProps) => {
  return (
    <AvatarPrimitive.Fallback
      data-slot="avatar-fallback"
      className={cn('flex h-full w-full items-center justify-center rounded-full bg-muted', className)}
      {...props}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };
