'use client';

import { useId, useState } from 'react';
import { type VariantProps } from 'tailwind-variants';

import { Button, buttonVariants } from '@/ui/button';
import { Input } from '@/ui/input';
import { Label } from '@/ui/label';
import { Switch } from '@/ui/switch';
import { Table, TableBody, TableCell, TableRow } from '@/ui/table';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';

export default function ButtonPage() {
  const switchId = useId();

  const [label, setLabel] = useState<string>('Button');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [props, setProps] = useState<VariantProps<typeof buttonVariants>>();

  return (
    <div className="flex h-dvh flex-col">
      <div className="flex h-100 items-center justify-center">
        <Button
          disabled={isDisabled}
          {...props}
        >
          {label}
        </Button>
      </div>

      <div className="border-t">
        <h1>Options</h1>
        <div className="p-4">
          <Table>
            <TableBody>
              <TableRow>
                <TableCell>Label</TableCell>
                <TableCell>
                  <Input
                    value={label}
                    onChange={(e) => setLabel(e.target.value)}
                  />
                </TableCell>
              </TableRow>
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
              {Object.entries(buttonVariants.variants).map(([variant, values]) => (
                <TableRow key={variant}>
                  <TableCell>{variant}</TableCell>
                  <TableCell>
                    <ToggleGroup
                      type="single"
                      className="justify-start"
                      onValueChange={(value) => {
                        if (value) {
                          setProps((prev) => ({
                            ...prev,
                            [variant]: value,
                          }));
                        }
                      }}
                    >
                      {Object.keys(values).map((value) => (
                        <ToggleGroupItem
                          key={value}
                          value={value}
                        >
                          {variant}
                        </ToggleGroupItem>
                      ))}
                    </ToggleGroup>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>
      </div>
    </div>
  );
}
