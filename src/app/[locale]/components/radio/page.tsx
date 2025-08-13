'use client';

import { useId, useState } from 'react';

import { Label } from '@/ui/label';
import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Switch } from '@/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/ui/table';

export default function RadioPage() {
  const switchId = useId();
  const [isDisabled, setDisabled] = useState<boolean>(false);

  const options = [
    {
      id: '1',
      value: '1',
      label: 'Option 1',
    },
    {
      id: '2',
      value: '2',
      label: 'Option 2',
    },
    {
      id: '3',
      value: '3',
      label: 'Option 3',
    },
  ];

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex h-100 items-center justify-center">
        <RadioGroup
          disabled={isDisabled}
          className="flex flex-col"
        >
          {options.map((option) => (
            <div
              key={option.id}
              className="flex items-center gap-2"
            >
              <RadioGroupItem
                id={option.id}
                value={option.value}
              />
              <Label htmlFor={option.id}>{option.label}</Label>
            </div>
          ))}
        </RadioGroup>
      </div>

      <div className="border-t">
        <h1>Options</h1>
        <div className="p-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  <Label htmlFor={switchId}>Disabled</Label>
                </TableCell>
                <TableCell>
                  <Switch
                    id={switchId}
                    checked={isDisabled}
                    onCheckedChange={setDisabled}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
