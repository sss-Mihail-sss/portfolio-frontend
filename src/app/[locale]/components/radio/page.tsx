import { RadioGroup, RadioGroupItem } from '@/ui/radio-group';
import { Label } from '@/ui/label';

export default function RadioPage() {
  return (
    <div className='min-h-dvh flex flex-col gap-2 items-center justify-center'>
      <RadioGroup className='flex flex-col gap-2' defaultValue='3'>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='1' id='1' />
          <Label htmlFor='1'>Radio 1</Label>
        </div>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='2' id='2' />
          <Label htmlFor='2'>Radio 2</Label>
        </div>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='3' id='3' disabled defaultChecked />
          <Label htmlFor='3'>Radio 3</Label>
        </div>
        <div className='flex items-center gap-2'>
          <RadioGroupItem value='4' id='4' disabled />
          <Label htmlFor='4'>Radio 4</Label>
        </div>
      </RadioGroup>
    </div>
  );
}
