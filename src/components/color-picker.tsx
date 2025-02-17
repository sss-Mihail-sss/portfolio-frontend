import { ColorPicker as ArkColorPicker, parseColor } from '@ark-ui/react/color-picker';
import { inputVariants } from '@/ui/input';

function ColorPicker() {
  return (
    <ArkColorPicker.Root defaultValue={parseColor('#EB5E41')}>
      <ArkColorPicker.Control className='flex gap-2'>
        <ArkColorPicker.Trigger className='border rounded-sm p-1'>
          <ArkColorPicker.ValueSwatch className='rounded-sm size-5' />
        </ArkColorPicker.Trigger>
      </ArkColorPicker.Control>
      <ArkColorPicker.Positioner>
        <ArkColorPicker.Content className='flex flex-col gap-2 bg-background rounded border p-2 shadow z-50 w-64'>
          <ArkColorPicker.Area className='h-36 rounded-sm overflow-hidden'>
            <ArkColorPicker.AreaBackground className='h-full' />
            <ArkColorPicker.AreaThumb className='size-2.5 bg-background outline-2 outline-background shadow rounded-full' />
          </ArkColorPicker.Area>
          <ArkColorPicker.ChannelSlider channel='hue' className='h-3'>
            <ArkColorPicker.ChannelSliderTrack className='h-full rounded-sm' />
            <ArkColorPicker.ChannelSliderThumb className='size-2.5 bg-background outline-2 outline-background shadow rounded-full -translate-1/2' />
          </ArkColorPicker.ChannelSlider>
          <ArkColorPicker.ChannelSlider channel='alpha' className='h-3'>
            <ArkColorPicker.TransparencyGrid />
            <ArkColorPicker.ChannelSliderTrack className='h-full rounded-sm' />
            <ArkColorPicker.ChannelSliderThumb className='size-2.5 bg-background outline-2 outline-background shadow rounded-full -translate-1/2' />
          </ArkColorPicker.ChannelSlider>
          <ArkColorPicker.SwatchGroup className='flex gap-2 items-center'>
            <ArkColorPicker.SwatchTrigger value='red'>
              <ArkColorPicker.Swatch value='red' className='size-4 rounded-sm'>
                <ArkColorPicker.SwatchIndicator>✓</ArkColorPicker.SwatchIndicator>
              </ArkColorPicker.Swatch>
            </ArkColorPicker.SwatchTrigger>
            <ArkColorPicker.SwatchTrigger value='blue'>
              <ArkColorPicker.Swatch value='blue' className='size-4 rounded-sm'>
                <ArkColorPicker.SwatchIndicator>✓</ArkColorPicker.SwatchIndicator>
              </ArkColorPicker.Swatch>
            </ArkColorPicker.SwatchTrigger>
            <ArkColorPicker.SwatchTrigger value='green'>
              <ArkColorPicker.Swatch value='green' className='size-4 rounded-sm'>
                <ArkColorPicker.SwatchIndicator>✓</ArkColorPicker.SwatchIndicator>
              </ArkColorPicker.Swatch>
            </ArkColorPicker.SwatchTrigger>
          </ArkColorPicker.SwatchGroup>
          <ArkColorPicker.View format='rgba' className='flex gap-2'>
            <ArkColorPicker.ChannelInput channel='hex' className={inputVariants()} />
            <ArkColorPicker.ChannelInput channel='alpha' className={inputVariants()} />
          </ArkColorPicker.View>
        </ArkColorPicker.Content>
      </ArkColorPicker.Positioner>
      <ArkColorPicker.HiddenInput />
    </ArkColorPicker.Root>
  );
}

export { ColorPicker };