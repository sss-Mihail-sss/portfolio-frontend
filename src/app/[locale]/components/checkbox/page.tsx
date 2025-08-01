'use client';

import { useState } from 'react';

import { Checkbox } from '@/ui/checkbox';
import { Table, TableBody, TableCell, TableRow } from '@/ui/table';
import { Switch } from '@/ui/switch';
import { Label } from '@/ui/label';

export default function CheckboxPage() {
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const options = [
    {
      id: '1',
      value: '1',
      label: 'Option 1'
    },
    {
      id: '2',
      value: '2',
      label: 'Option 2'
    },
    {
      id: '3',
      value: '3',
      label: 'Option 3'
    }
  ];

  return (
    <div className='h-dvh flex flex-col'>
      <div className='h-100 flex items-center justify-center'>
        <div className='flex flex-col'>
          {
            options.map((option) => (
              <div key={option.id} className='flex items-center gap-2'>
                <Checkbox id={option.id} value={option.value} />
                <Label htmlFor={option.id}>
                  {option.label}
                </Label>
              </div>
            ))
          }
        </div>
      </div>

      <div className='border-t'>
        <h1>Options</h1>
        <div className='p-4'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Label htmlFor='disabled'>
                    Disabled
                  </Label>
                </TableCell>
                <TableCell>
                  <Switch id='disabled' checked={isDisabled} onCheckedChange={setDisabled} />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
