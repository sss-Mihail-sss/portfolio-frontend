'use client';

import { useState } from 'react';
import { LoaderCircle } from 'lucide-react';
import {
  ColumnFiltersState,
  getCoreRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import { useCompanies } from '@/lib/hooks/useCompany';
import { useSearchParams } from '@/lib/searchParams';
import { companiesColumns } from '@/components/table/companies-columns';
import { DataTable } from '@/ui/data-table/data-table';
import { DataTablePagination } from '@/ui/data-table/data-table-pagination';

const TableCompanies = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const [searchParams, setPaginationSearchParams] = useSearchParams();

  const { data, isFetching } = useCompanies({
    pagination: searchParams,
  });

  const table = useReactTable({
    data: data?.data || [],
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPaginationSearchParams,
    manualSorting: true,
    manualPagination: true,
    manualFiltering: true,
    state: {
      pagination: {
        pageIndex: searchParams.pageIndex,
        pageSize: searchParams.pageSize,
      },
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
    columns: companiesColumns,
    rowCount: data?.rowCount,
    pageCount: data?.pageCount,
  });

  console.log(isFetching);

  return (
    <div className='relative'>
      <DataTable table={table} />
      <DataTablePagination table={table} />

      {
        isFetching && (
          <div className='flex items-center justify-center absolute inset-0 bg-muted/40'>
            <LoaderCircle className='animate-spin' />
          </div>
        )
      }
    </div>
  );
};

export { TableCompanies };
