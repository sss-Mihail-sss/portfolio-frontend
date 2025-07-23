import { Button, ButtonProps } from '@/ui/button';

export default function ButtonPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-4 items-center justify-center'>
      <div className='flex flex-col gap-4 items-start'>
        <Buttons size='xs' />
        <Buttons size='sm' />
        <Buttons />
        <Buttons size='lg' />
        <Buttons size='xl' />
      </div>
    </div>
  );
}

function Buttons({ size }: ButtonProps) {
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
          <Button size={size} color='primary'>Button</Button>
          <Button size={size} color='primary' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='primary' variant='outline'>Button</Button>
          <Button size={size} color='primary' variant='outline' disabled>Button</Button>
        </div>

        <div className='flex flex-col items-center justify-center gap-2'>
          <Button size={size} color='primary' variant='ghost'>Button</Button>
          <Button size={size} color='primary' variant='ghost' disabled>Button</Button>
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
