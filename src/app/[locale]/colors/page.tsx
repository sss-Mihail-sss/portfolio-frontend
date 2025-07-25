export default async function ColorsPage() {
  return (
    <div className='h-dvh w-full p-6'>
      <div className='text-center'>
        <h1 className='text-2xl font-bold'>Colors Page</h1>
        <p className='mt-4'>This page is under construction.</p>
      </div>

      <div>
        <div className='space-y-2'>
          <h2>Typography</h2>

          <div className='p-4 rounded-md bg-surface-sunked space-y-2'>
            <h1 className='text-heading-2xl'>Heading XXl</h1>
            <h2 className='text-heading-xl'>Heading XL</h2>
            <h3 className='text-heading-lg'>Heading LG</h3>
            <h4 className='text-heading'>Heading</h4>
            <h5 className='text-heading-sm'>Heading SM</h5>
            <h6 className='text-heading-xs'>Heading XS</h6>
            <h6 className='text-heading-2xs'>Heading XXS</h6>

            <p className='text-body-lg'>Body LG Regular</p>
            <p className='text-body'>Body Regular</p>
            <p className='text-body-sm'>Body SM Regular</p>
          </div>
        </div>
        <div className='space-y-2'>
          <h2>Surface</h2>

          <div className='p-4 rounded-md flex gap-4 bg-surface-sunked'>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm'>Overlay</p>
              <div className='size-24 rounded shadow-raised bg-surface-overlay hover:bg-surface-overlay-hover' />
            </div>
            <div className='flex flex-col items-center gap-2'>
              <p className='text-sm'>Raised</p>
              <div className='size-24 rounded shadow-raised bg-surface-raised hover:bg-surface-raised-hover' />
            </div>
          </div>
        </div>

        <div className='space-y-2'>
          <h2>Background</h2>

          <div className='p-4 rounded-md flex gap-4 bg-surface-sunked'>
            test
          </div>
        </div>

        <div className='space-y-2'>
          <h2>Colors</h2>

          <div className='p-4 rounded-md flex gap-4 bg-surface-sunked'>
            Primary

            <div>
              <p className='text-primary'>Primary</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
