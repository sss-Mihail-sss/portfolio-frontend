import type { ComponentProps } from 'react';
import type { VariantProps } from 'tailwind-variants';

import { Link as ILink } from '@/config/i18n/navigation';
import { cn, tv } from '@/lib/utils';

const linkVariants = tv({
  base: 'text-sm rounded-sm focus-visible:outline-ring focus-visible:outline-2 focus-visible:outline-offset-1',
  variants: {
    variant: {
      primary: 'text-primary hover:text-primary/90',
      secondary: 'text-muted-fg hover:text-fg',
    },
    underline: {
      true: 'underline-offset-2 hover:underline',
      false: '',
    },
  },
});

type LinkProps = ComponentProps<typeof ILink> & VariantProps<typeof linkVariants>;

function Link({ variant, underline, className, ...props }: LinkProps) {
  return (
    <ILink
      data-slot="link"
      className={cn(linkVariants({ underline, variant }), className)}
      {...props}
    />
  );
}

export { Link };
export type { LinkProps };
