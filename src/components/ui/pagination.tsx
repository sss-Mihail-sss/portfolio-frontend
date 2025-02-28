import { ComponentProps } from 'react';
import { ChevronLeftIcon, ChevronRightIcon, MoreHorizontalIcon } from 'lucide-react';
import { Pagination as PaginationPrimitive, usePaginationContext } from '@ark-ui/react/pagination';

import { Button, buttonVariants } from '@/ui/button';
import { cn } from '@/lib/utils';

type PaginationProps = ComponentProps<typeof PaginationPrimitive.Root>;

function Pagination({ className, ...props }: PaginationProps) {
  return (
    <PaginationPrimitive.Root
      role='navigation'
      aria-label='pagination'
      data-slot='pagination'
      className={cn('flex flex-row items-center gap-1', className)}
      {...props}
    />
  );
}

function PaginationContent() {
  return (
    <PaginationPrimitive.Context data-slot='pagination-content'>
      {
        (pagination) => pagination.pages.map((page, index) => {
          return page.type === 'page' ? (
            <PaginationItem key={index} type={page.type} value={(page.value)}>
              {page.value}
            </PaginationItem>
          ) : (
            <PaginationPrimitive.Ellipsis
              key={index}
              index={index}
              aria-hidden
              data-slot='pagination-ellipsis'
              className='flex size-9 items-center justify-center'
            >
              <MoreHorizontalIcon className='size-4' />
              <span className='sr-only'>More pages</span>
            </PaginationPrimitive.Ellipsis>
          );
        })
      }
    </PaginationPrimitive.Context>
  );
}

type PaginationItemProps =
  Pick<ComponentProps<typeof Button>, 'size' | 'disabled'>
  & ComponentProps<typeof PaginationPrimitive.Item>

function PaginationItem({
  className,
  disabled,
  size = 'icon',
  ...props
}: PaginationItemProps) {
  const { page } = usePaginationContext();

  return (
    <PaginationPrimitive.Item
      data-slot='pagination-item'
      className={cn(
        buttonVariants({
          className: 'text-sm',
          variant: props.value === page ? 'outline' : 'ghost',
          disabled,
          size,
        }),
        className,
      )}
      {...props}
    />
  );
}

function PaginationPrevious({ className, ...props }: ComponentProps<typeof PaginationPrimitive.PrevTrigger>) {
  const { page } = usePaginationContext();

  return (
    <PaginationPrimitive.PrevTrigger
      aria-label='Go to previous page'
      className={cn(
        buttonVariants({
          className: 'gap-1',
          variant: 'ghost',
          size: 'icon',
          disabled: page === 1,
        }),
        className,
      )}
      {...props}
    >
      <ChevronLeftIcon />
      <span className='sr-only'>Previous</span>
    </PaginationPrimitive.PrevTrigger>
  );
}

function PaginationNext({ className, ...props }: ComponentProps<typeof PaginationPrimitive.NextTrigger>) {
  const { page, totalPages } = usePaginationContext();

  return (
    <PaginationPrimitive.NextTrigger
      aria-label='Go to next page'
      className={cn(
        buttonVariants({
          className: 'gap-1',
          variant: 'ghost',
          size: 'icon',
          disabled: page === totalPages,
        }),
        className,
      )}
      {...props}
    >
      <span className='sr-only'>Next</span>
      <ChevronRightIcon />
    </PaginationPrimitive.NextTrigger>
  );
}

export {
  Pagination,
  PaginationContent,
  PaginationPrevious,
  PaginationNext,
};
