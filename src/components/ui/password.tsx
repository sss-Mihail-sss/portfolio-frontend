import { EyeClosedIcon, EyeIcon } from 'lucide-react';
import { unstable_PasswordToggleField as PasswordPrimitive } from 'radix-ui';
import type { ComponentProps } from 'react';

import { cn } from '@/lib/utils';
import { buttonVariants } from '@/ui/button';
import { Input } from '@/ui/input';

function Password({ children, ...props }: ComponentProps<typeof PasswordPrimitive.Root>) {
  return (
    <PasswordPrimitive.Root {...props}>
      <div className="relative">{children}</div>
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
      <Input />
    </PasswordPrimitive.Input>
  );
}

type PasswordToggleProps = ComponentProps<typeof PasswordPrimitive.Toggle> & {};

function PasswordToggle({ className, ...props }: PasswordToggleProps) {
  return (
    <PasswordPrimitive.Toggle
      className={cn(
        buttonVariants({ size: 'sq-xs', variant: 'ghost' }),
        className,
        'absolute top-1/2 -translate-y-1/2 right-1',
      )}
      {...props}
    >
      <PasswordPrimitive.Icon
        hidden={<EyeClosedIcon />}
        visible={<EyeIcon />}
      />
    </PasswordPrimitive.Toggle>
  );
}

function PasswordIcon(props: ComponentProps<typeof PasswordPrimitive.Icon>) {
  return (
    <PasswordPrimitive.Icon
      {...props}
      hidden={<EyeIcon />}
      visible={<EyeClosedIcon />}
    />
  );
}

export { Password, PasswordInput, PasswordToggle, PasswordIcon };
