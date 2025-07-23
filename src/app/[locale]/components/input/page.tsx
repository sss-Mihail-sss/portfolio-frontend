'use client';

import { Input } from '@/ui/input';

export default function InputPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-2 items-center justify-center'>
      <div className='flex flex-col gap-2'>
        <Input />
        <Input placeholder='Search...' />
        <Input value='Text' />
        <Input aria-invalid />
        <Input disabled />
        <Input disabled placeholder='Search...' />
        <Input disabled value='Text' />
        <Input disabled aria-invalid />
      </div>
    </div>
  );
}
