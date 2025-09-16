import { type ComponentProps } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { Link as LocaleLink } from '@/config/i18n/navigation';
import { cn, tv } from '@/lib/utils/classnames';

const linkVariants = tv({
  base: [
    'rounded-sm text-link text-sm hover:text-link-hover',
    'visited:text-link-visited visited:hover:text-link-visited-hover',
    'focus-visible:outline-2 focus-visible:outline-focus focus-visible:outline-offset-2',
  ],
  variants: {
    variant: {
      default: '',
      primary: 'text-brand',
      secondary: 'text-muted',
    },
    underline: {
      true: 'underline underline-offset-2',
      false: '',
    },
  },
  defaultVariants: {
    variant: 'default',
    underline: false,
  },
});

type LinkProps = ComponentProps<typeof LocaleLink> & VariantProps<typeof linkVariants> & { unstyled?: true };

const Link = ({ variant, underline, unstyled, className, ...props }: LinkProps) => {
  return (
    <LocaleLink
      data-slot="link"
      className={cn(!unstyled && linkVariants({ variant, underline }), className)}
      {...props}
    />
  );
};

export { Link };
export type { LinkProps };
