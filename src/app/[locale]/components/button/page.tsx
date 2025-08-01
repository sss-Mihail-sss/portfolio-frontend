'use client';

import { useState } from 'react';
import { VariantProps } from 'tailwind-variants';

import { Button, buttonVariants } from '@/ui/button';
import { Table, TableBody, TableCell, TableRow } from '@/ui/table';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';
import { Input } from '@/ui/input';
import { Switch } from '@/ui/switch';
import { Label } from '@/ui/label';

export default function ButtonPage() {
  const [label, setLabel] = useState<string>('Button');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [props, setProps] = useState<VariantProps<typeof buttonVariants>>();

  return (
    <div className='h-dvh flex flex-col'>
      <div className='h-100 flex items-center justify-center'>
        <Button disabled={isDisabled} {...props}>
          {label}
        </Button>
      </div>

      <div className='border-t'>
        <h1>Options</h1>
        <div className='p-4'>
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>
                  Label
                </TableCell>
                <TableCell>
                  <Input value={label} onChange={(e) => setLabel(e.target.value)} />
                </TableCell>
              </TableRow>
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
              {
                Object.entries(buttonVariants.variants).map(([variant, values], index) => (
                  <TableRow key={index}>
                    <TableCell>
                      {variant}
                    </TableCell>
                    <TableCell>
                      <ToggleGroup
                        type='single'
                        className='justify-start'
                        onValueChange={(value) => {
                          if (value) {
                            setProps(prev => ({
                              ...prev,
                              [variant]: value
                            }));
                          }
                        }}
                      >
                        {
                          Object.keys(values).map((variant) => (
                            <ToggleGroupItem key={variant} value={variant}>
                              {variant}
                            </ToggleGroupItem>
                          ))
                        }
                      </ToggleGroup>
                    </TableCell>
                  </TableRow>
                ))
              }
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
