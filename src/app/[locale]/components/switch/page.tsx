'use client';

import { useId } from 'react';

import { Label } from '@/ui/label';
import { Switch, SwitchProps } from '@/ui/switch';

export default function SwitchPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-2 items-center justify-center'>
      <SwitchDemo />
      <SwitchDemo defaultChecked />
      <SwitchDemo disabled />
      <SwitchDemo disabled defaultChecked />
    </div>
  );
}

function SwitchDemo(props: SwitchProps) {
  const id = useId();

  return (
    <div className='flex gap-2 items-center'>
      <Switch {...props} id={id} />
      <Label htmlFor={id}>
        Switch
      </Label>
    </div>
  );
}
