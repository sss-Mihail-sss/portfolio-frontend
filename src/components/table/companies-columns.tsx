import { Column, ColumnDef } from '@tanstack/react-table';
import { Company } from '@/types/company';
import { Checkbox } from '@/ui/checkbox';
import { useFormatter } from 'next-intl';
import { Button } from '@/ui/button';
import { ArrowDownIcon, ArrowUpIcon } from 'lucide-react';

const HeadButton = ({ text, column }: { text: string; column: Column<Company> }) => (
  <Button
    className='w-full flex items-center justify-between p-2'
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

export const companiesColumns: ColumnDef<Company>[] = [
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
    accessorKey: 'id',
    header: ({ column }) => (
      <HeadButton column={column} text='Id' />
    ),
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
          {format.dateTime(new Date(row.original.createdAt), 'date-short')}
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
          {format.dateTime(new Date(row.original.updatedAt), 'date-short')}
        </div>
      );
    },
    size: 80,
  },
];
