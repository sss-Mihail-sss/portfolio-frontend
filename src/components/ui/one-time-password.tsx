import { unstable_OneTimePasswordField as OneTimePasswordPrimitive } from 'radix-ui';
import { type ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';

type OneTimePasswordProps = {
  length: number;
} & ComponentProps<typeof OneTimePasswordPrimitive.Root>;

const OneTimePassword = ({ children, className, length, ...props }: OneTimePasswordProps) => {
  return (
    <OneTimePasswordPrimitive.Root
      data-slot="one-time-password"
      className={cn('flex gap-1', className)}
      {...props}
    >
      {Array.from({ length }, (_, index) => index).map((key) => (
        <OneTimePasswordInput key={key} />
      ))}
      {children}
      <OneTimePasswordPrimitive.HiddenInput />
    </OneTimePasswordPrimitive.Root>
  );
};

const OneTimePasswordInput = ({
  children,
  className,
  ...props
}: ComponentProps<typeof OneTimePasswordPrimitive.Input>) => {
  return (
    <OneTimePasswordPrimitive.Input
      data-slot="one-time-password-input"
      className={cn(
        'size-10 rounded border text-center sm:size-16',
        'outline-focus focus-visible:outline-2 focus-visible:outline-offset-2',
        className,
      )}
      {...props}
    >
      {children}
    </OneTimePasswordPrimitive.Input>
  );
};

export { OneTimePassword };
