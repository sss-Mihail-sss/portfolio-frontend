'use client';

import {useState} from 'react';
import {VariantProps} from 'tailwind-variants';

import {Button, ButtonProps, buttonVariants} from '@/ui/button';
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from '@/ui/select';
import {Switch} from '@/ui/switch';

import {Input} from '@/components/ui/input';

export default function ButtonPage() {
  const [label, setLabel] = useState<string>('Button');
  const [isDisabled, setDisabled] = useState<boolean>(false);
  const [props, setProps] = useState<VariantProps<typeof buttonVariants>>({
    variant: 'default',
    color: 'default',
    size: 'default'
  });

  return (
    <div className='text-body min-h-dvh flex flex-col gap-4'>
      <div className='h-64 flex items-center justify-center'>
        <Button {...props} disabled={isDisabled}>
          {label}
        </Button>
      </div>

      <div className='flex-1 flex flex-col gap-4 p-4 border-t'>
        <div className='flex gap-4 items-center'>
          <span className='w-24'>
            Label
          </span>
          <Input value={label} onChange={e => setLabel(e.target.value)}/>
        </div>

        <div className='flex gap-4 items-center'>
          <span className='w-24'>
            Disabled
          </span>
          <Switch checked={isDisabled} onCheckedChange={setDisabled} />
        </div>

        {
          Object.entries(buttonVariants.variants).map(([variant, values]) => (
            <div key={variant} className='flex gap-4 items-center'>
              <span className='w-24'>
                {variant}
              </span>
              <Select defaultValue='default' onValueChange={value => setProps({...props, [variant]: value})}>
                <SelectTrigger>
                  <SelectValue/>
                </SelectTrigger>
                <SelectContent position='popper'>
                  {
                    Object.keys(values).map((value) => (
                      <SelectItem key={value} value={value}>
                        {value}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
            </div>
          ))
        }
      </div>
    </div>
  );
}

function Buttons({size}: ButtonProps) {
  return (
    <div className='flex items-center justify-center gap-4'>
      <div className='grid grid-cols-3 gap-2'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size}>Button</Button>
          <Button size={size} disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} variant='outline'>Button</Button>
          <Button size={size} variant='outline' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} variant='ghost'>Button</Button>
          <Button size={size} variant='ghost' disabled>Button</Button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='brand'>Button</Button>
          <Button size={size} color='brand' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='brand' variant='outline'>Button</Button>
          <Button size={size} color='brand' variant='outline' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='brand' variant='ghost'>Button</Button>
          <Button size={size} color='brand' variant='ghost' disabled>Button</Button>
        </div>
      </div>

      <div className='grid grid-cols-3 gap-2'>
        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='negative'>Button</Button>
          <Button size={size} color='negative' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='negative' variant='outline'>Button</Button>
          <Button size={size} color='negative' variant='outline' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='negative' variant='ghost'>Button</Button>
          <Button size={size} color='negative' variant='ghost' disabled>Button</Button>
        </div>
      </div>
    </div>
  );
}
