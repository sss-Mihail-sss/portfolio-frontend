import { type Table as TanStackTable } from '@tanstack/react-table';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

type Props<TData> = {
  table: TanStackTable<TData>;
  pageSizeOptions?: number[];
};

function DataTablePagination<TData>({ table, pageSizeOptions }: Props<TData>) {
  return (
    <div className="flex flex-wrap items-center gap-4 py-4">
      <div className="flex-1 whitespace-nowrap text-muted-foreground text-sm">
        {table.getFilteredSelectedRowModel().rows.length} of {table.getFilteredRowModel().rows.length} row(s) selected.
      </div>

      {!!pageSizeOptions && pageSizeOptions.length > 1 && (
        <div className="flex items-center gap-2 text-sm">
          <span>Rows per page</span>
          <Select
            value={String(table.getState().pagination.pageSize)}
            onValueChange={(value) => table.setPageSize(+value)}
          >
            <SelectTrigger className="w-20">
              <SelectValue placeholder="page" />
            </SelectTrigger>
            <SelectContent position="popper">
              {pageSizeOptions.map((value) => (
                <SelectItem
                  key={value}
                  value={String(value)}
                >
                  {value}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      )}

      <div className="text-sm">
        {table.getState().pagination.pageIndex + 1} of {table.getPageCount()}
      </div>

      {/*<Pagination*/}
      {/*  page={table.getState().pagination.pageIndex + 1}*/}
      {/*  pageSize={table.getState().pagination.pageSize}*/}
      {/*  count={table.getRowCount()}*/}
      {/*  onPageChange={(details) => table.setPageIndex(details.page - 1)}*/}
      {/*  onPageSizeChange={(details) => table.setPageSize(details.pageSize)}*/}
      {/*>*/}
      {/*  <PaginationPrevious />*/}
      {/*  <PaginationContent />*/}
      {/*  <PaginationNext />*/}
      {/*</Pagination>*/}
    </div>
  );
}

export { DataTablePagination };
