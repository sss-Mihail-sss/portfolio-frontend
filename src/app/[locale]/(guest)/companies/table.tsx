'use client';

import { useState } from 'react';
import { useFormatter } from 'next-intl';
import {
  Column,
  ColumnDef,
  ColumnFiltersState,
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  SortingState,
  useReactTable,
  VisibilityState,
} from '@tanstack/react-table';

import { Checkbox } from '@/ui/checkbox';
import { Company } from '@/types/company';
import { Button } from '@/ui/button';
import { useCompanies } from '@/lib/hooks/useCompany';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/ui/table';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const HeadButton = ({ text, column }: { text: string; column: Column<Company> }) => (
  <Button
    className='w-full flex items-center justify-between'
    variant='ghost'
    onClick={() => {
      if (!column.getIsSorted()) {
        column.toggleSorting(true, true);
      } else if (column.getIsSorted() === 'desc') {
        column.toggleSorting(false, true);
      } else {
        column.clearSorting();
      }
    }}
  >
    {text}
    {
      column.getIsSorted() === 'desc' ? (
        <ArrowDownIcon className='size-4' />
      ) : column.getIsSorted() === 'asc' ? (
        <ArrowUpIcon className='size-4' />
      ) : null
    }
  </Button>
);

export const columns: ColumnDef<Company>[] = [
  {
    id: 'select',
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && 'indeterminate')
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label='Select all'
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label='Select row'
      />
    ),
    enableSorting: false,
    enableHiding: false,
    size: 20,
  },
  {
    accessorKey: 'name',
    header: ({ column }) => (
      <HeadButton column={column} text='Name' />
    ),
  },
  {
    accessorKey: 'email',
    header: ({ column }) => (
      <HeadButton column={column} text='Email' />
    ),
  },
  {
    accessorKey: 'phone',
    header: ({ column }) => (
      <HeadButton column={column} text='Phone' />
    ),
  },
  {
    accessorKey: 'createdAt',
    header: ({ column }) => (
      <HeadButton column={column} text='Created at' />
    ),
    cell: ({ row }) => {
      const format = useFormatter();

      return (
        <div className='font-mono'>
          {format.dateTime(new Date(row.original.createdAt), {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </div>
      );
    },
    size: 80,
  },
  {
    accessorKey: 'updatedAt',
    header: ({ column }) => (
      <HeadButton column={column} text='Last update' />
    ),
    cell: ({ row }) => {
      const format = useFormatter();

      if (!row.original.updatedAt) {
        return row.original.updatedAt;
      }

      return (
        <div className='font-mono'>
          {format.dateTime(new Date(row.original.updatedAt), {
            year: 'numeric',
            month: 'numeric',
            day: 'numeric',
          })}
        </div>
      );
    },
    size: 80,
  },
];

const CompaniesTable = () => {
  const [sorting, setSorting] = useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = useState({});

  const { data = [], isLoading } = useCompanies();

  const table = useReactTable({
    data,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    getCoreRowModel: getCoreRowModel(),
    // getPaginationRowModel: getPaginationRowModel(),
    // getSortedRowModel: getSortedRowModel(),
    // getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    manualSorting: true,
    manualPagination: true,
    manualFiltering: true,
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
    },
  });

  return (
    <div className='w-full'>
      <div>
        <Table>
          <TableHeader>
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => (
                  <TableHead
                    key={header.id}
                    style={{
                      minWidth: header.column.columnDef.size,
                      maxWidth: header.column.columnDef.size,
                    }}
                  >
                    {header.isPlaceholder
                      ? null
                      : flexRender(
                        header.column.columnDef.header,
                        header.getContext(),
                      )}
                  </TableHead>
                ))}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && 'selected'}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      key={cell.id}
                      style={{
                        minWidth: cell.column.columnDef.size,
                        maxWidth: cell.column.columnDef.size,
                      }}
                      className='truncate'
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className='h-24 text-center'
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <div className='flex items-center justify-end space-x-2 py-4'>
        <div className='flex-1 text-sm text-muted-foreground'>
          {table.getFilteredSelectedRowModel().rows.length} of{' '}
          {table.getFilteredRowModel().rows.length} row(s) selected.
        </div>
        <div className='space-x-2'>
          <Button
            variant='outline'
            onClick={() => table.previousPage()}
            disabled={!table.getCanPreviousPage()}
          >
            Previous
          </Button>
          <Button
            variant='outline'
            onClick={() => table.nextPage()}
            disabled={!table.getCanNextPage()}
          >
            Next
          </Button>
        </div>
      </div>
    </div>
  );
};

export { CompaniesTable };
