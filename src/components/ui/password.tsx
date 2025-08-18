import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { unstable_PasswordToggleField as PasswordPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils/classnames';
import { IconButton } from '@/ui/icon-button';
import { Input } from '@/ui/input';

function Password({ children, ...props }: ComponentProps<typeof PasswordPrimitive.Root>) {
  return (
    <PasswordPrimitive.Root {...props}>
      <div className="flex">{children}</div>
    </PasswordPrimitive.Root>
  );
}

function PasswordInput({ className, ...props }: Omit<ComponentProps<typeof PasswordPrimitive.Input>, 'asChild'>) {
  return (
    <PasswordPrimitive.Input
      {...props}
      className={cn('pr-10', className)}
      asChild
    >
      <Input className="w-full" />
    </PasswordPrimitive.Input>
  );
}

type PasswordToggleProps = ComponentProps<typeof PasswordPrimitive.Toggle> & {};

function PasswordToggle({ className, ...props }: PasswordToggleProps) {
  return (
    <PasswordPrimitive.Toggle
      className={cn(className, '')}
      {...props}
    >
      <PasswordIcon
        hidden={<EyeClosedIcon className="size-full" />}
        visible={<EyeIcon />}
      />
    </PasswordPrimitive.Toggle>
  );
}

function PasswordIcon(props: ComponentProps<typeof PasswordPrimitive.Icon>) {
  return (
    <IconButton
      variant="ghost"
      size="sm"
      asChild
    >
      <PasswordPrimitive.Icon {...props} />
    </IconButton>
  );
}

export { Password, PasswordInput, PasswordToggle, PasswordIcon };
