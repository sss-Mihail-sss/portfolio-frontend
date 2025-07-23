'use client';

import { Textarea } from '@/ui/textarea';

export default function TextareaPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-2 items-center justify-center'>
      <div className='flex flex-col gap-2'>
        <Textarea />
        <Textarea placeholder='Search...' />
        <Textarea value='ComponentProps' />
        <Textarea aria-invalid />
        <Textarea disabled />
        <Textarea disabled placeholder='Search...' />
        <Textarea disabled value='ComponentProps' />
        <Textarea disabled aria-invalid />
      </div>
    </div>
  );
}
