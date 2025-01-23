import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { Link as ILink } from '@/lib/i18n/routing';
import { cn } from '@/lib/utils';

const linkVariants = tv({
  base: 'text-sm',
  variants: {
    variant: {
      underline: 'hover:underline',
    },
  },
});

type LinkProps = ComponentProps<typeof ILink> & VariantProps<typeof linkVariants>;

const Link = ({ ref, variant, className, ...props }: LinkProps) => {
  return (
    <ILink ref={ref} className={cn(linkVariants({ variant }), className)} {...props} />
  );
};

export { Link };
