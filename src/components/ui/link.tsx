import { Link as ILink } from '@/lib/i18n/routing';
import { tv, VariantProps } from 'tailwind-variants';
import { cn } from '@/lib/utils';
import { ComponentProps } from 'react';

const linkVariants = tv({
  base: 'text-sm hover:underline',
});

type LinkProps = ComponentProps<typeof ILink> & VariantProps<typeof linkVariants>;

const Link = ({ ref, className, ...props }: LinkProps) => {
  return (
    <ILink ref={ref} className={cn(linkVariants(), className)} {...props} />
  );
};

export { Link };
