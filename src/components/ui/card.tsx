import { ComponentProps } from 'react';
import { tv, VariantProps } from 'tailwind-variants';

import { cn } from '@/lib/utils';

const cardsVariants = tv({
  slots: {
    card: 'rounded-xl border bg-card text-card-foreground shadow',
    header: 'flex flex-col space-y-1.5 p-6',
    title: 'font-semibold leading-none tracking-tight',
    description: 'text-sm text-muted-foreground',
    content: 'p-6 pt-0',
    footer: 'flex items-center p-6 pt-0',
  },
});

type CardProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const Card = ({ ref, className, ...props }: CardProps) => {
  const { card } = cardsVariants();

  return (
    <div ref={ref} className={cn(card(), className)} {...props} />
  );
};

type CardHeaderProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const CardHeader = ({ ref, className, ...props }: CardHeaderProps) => {
  const { header } = cardsVariants();

  return (
    <div ref={ref} className={cn(header(), className)} {...props} />
  );
};

type CardTitleProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const CardTitle = ({ ref, className, ...props }: CardTitleProps) => {
  const { title } = cardsVariants();

  return (
    <div ref={ref} className={cn(title(), className)} {...props} />
  );
};

type CardDescriptionProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const CardDescription = ({ ref, className, ...props }: CardDescriptionProps) => {
  const { description } = cardsVariants();

  return (
    <div ref={ref} className={cn(description(), className)} {...props} />
  );
};

type CardContentProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const CardContent = ({ ref, className, ...props }: CardContentProps) => {
  const { content } = cardsVariants();

  return (
    <div ref={ref} className={cn(content(), className)} {...props} />
  );
};

type CardFooterProps = ComponentProps<'div'> & VariantProps<typeof cardsVariants>;

const CardFooter = ({ ref, className, ...props }: CardFooterProps) => {
  const { footer } = cardsVariants();

  return (
    <div ref={ref} className={cn(footer(), className)} {...props} />
  );
};

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
