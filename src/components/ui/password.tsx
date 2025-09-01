import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { unstable_PasswordToggleField as PasswordPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';
import { IconButton } from '@/ui/icon-button';
import { Input } from '@/ui/input';

function Password({ children, ...props }: ComponentProps<typeof PasswordPrimitive.Root>) {
  return (
    <PasswordPrimitive.Root {...props}>
      <div className="relative">{children}</div>
    </PasswordPrimitive.Root>
  );
}

function PasswordInput({ className, ...props }: ComponentProps<typeof PasswordPrimitive.Input>) {
  return (
    <PasswordPrimitive.Input
      {...props}
      className={cn('pr-10', className)}
      // @ts-expect-error
      asChild
    >
      <Input className="w-full" />
    </PasswordPrimitive.Input>
  );
}

type PasswordToggleProps = ComponentProps<typeof PasswordPrimitive.Toggle> & {};

function PasswordToggle({ className, ...props }: PasswordToggleProps) {
  return (
    <IconButton
      variant="ghost"
      size="sm"
      asChild
    >
      <PasswordPrimitive.Toggle
        className={cn('-translate-y-1/2 absolute top-1/2 right-2', className)}
        {...props}
      >
        <PasswordPrimitive.Icon
          hidden={<EyeClosedIcon size={32} />}
          visible={<EyeIcon className="!size-5" />}
        />
      </PasswordPrimitive.Toggle>
    </IconButton>
  );
}

export { Password, PasswordInput, PasswordToggle };
