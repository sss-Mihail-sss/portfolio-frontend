'use client';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

export default function ComponentsPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-2 items-center justify-center'>
      <div className='flex flex-col gap-2'>
        <Select>
          <SelectTrigger className='w-64'>
            <SelectValue placeholder='Select...' />
          </SelectTrigger>
          <SelectContent position='popper'>
            <SelectItem value='1'>
              Option 1
            </SelectItem>
            <SelectItem value='2'>
              Option 2
            </SelectItem>
            <SelectItem value='3'>
              Option 3
            </SelectItem>
            <SelectItem value='4'>
              Option 4
            </SelectItem>
            <SelectItem value='5'>
              Option 5
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
}
