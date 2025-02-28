import { Table as TanStackTable } from '@tanstack/react-table';

import { Pagination, PaginationContent, PaginationNext, PaginationPrevious } from '@/ui/pagination';

type Props<TData> = {
  table: TanStackTable<TData>
}

function DataTablePagination<TData>({ table }: Props<TData>) {
  return (
    <div className='flex items-center justify-between gap-2 py-4'>
      <div className='flex-1 text-sm text-muted-foreground'>
        {table.getFilteredSelectedRowModel().rows.length} of{' '}
        {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      <div>
        {table.getState().pagination.pageIndex + 1} of{' '}
        {table.getPageCount()}
      </div>

      <Pagination
        page={(table.getState().pagination.pageIndex + 1)}
        pageSize={table.getState().pagination.pageSize}
        count={table.getRowCount()}
        onPageChange={(details) => table.setPageIndex(details.page - 1)}
        onPageSizeChange={(details) => table.setPageSize(details.pageSize)}
        type='link'
      >
        <PaginationPrevious />
        <PaginationContent />
        <PaginationNext />
      </Pagination>
    </div>
  );
}

export { DataTablePagination };
