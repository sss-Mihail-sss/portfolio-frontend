'use client';

import { Avatar as AvatarPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { cn, tv } from '@/lib/utils/classnames';

const avatarVariants = tv({
  slots: {
    root: 'relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full',
    image: 'aspect-square h-full w-full',
    fallback: 'flex h-full w-full items-center justify-center rounded-full bg-muted',
  },
});

type AvatarProps = VariantProps<typeof avatarVariants>;

type AvatarRootProps = ComponentProps<typeof AvatarPrimitive.Root> & AvatarProps;

const Avatar = ({ ref, className, ...props }: AvatarRootProps) => {
  const { root } = avatarVariants();

  return (
    <AvatarPrimitive.Root
      ref={ref}
      className={cn(root(), className)}
      {...props}
    />
  );
};

type AvatarImageProps = ComponentProps<typeof AvatarPrimitive.Image> & AvatarProps;

const AvatarImage = ({ ref, className, ...props }: AvatarImageProps) => {
  const { image } = avatarVariants();

  return (
    <AvatarPrimitive.Image
      ref={ref}
      className={cn(image(), className)}
      {...props}
    />
  );
};

type AvatarFallbackProps = ComponentProps<typeof AvatarPrimitive.Fallback> & AvatarProps;

const AvatarFallback = ({ ref, className, ...props }: AvatarFallbackProps) => {
  const { fallback } = avatarVariants();

  return (
    <AvatarPrimitive.Fallback
      ref={ref}
      className={cn(fallback(), className)}
      {...props}
    />
  );
};

export { Avatar, AvatarImage, AvatarFallback };
