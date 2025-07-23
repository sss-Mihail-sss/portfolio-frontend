'use client';

import { useId } from 'react';

import { Checkbox, CheckboxProps } from '@/ui/checkbox';
import { Label } from '@/ui/label';

export default function CheckboxPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-4 items-center justify-center'>
      <div>
        <CheckboxDemo />
        <CheckboxDemo defaultChecked />
        <CheckboxDemo defaultChecked='indeterminate' />
        <CheckboxDemo aria-invalid />
        <CheckboxDemo disabled />
        <CheckboxDemo disabled defaultChecked />
        <CheckboxDemo disabled defaultChecked='indeterminate' />
      </div>
    </div>
  );
}

function CheckboxDemo(props: CheckboxProps) {
  const id = useId();

  return (
    <div className='flex gap-2 items-center'>
      <Checkbox {...props} id={id} />
      <Label htmlFor={id}>
        Checkbox
      </Label>
    </div>
  );
}
