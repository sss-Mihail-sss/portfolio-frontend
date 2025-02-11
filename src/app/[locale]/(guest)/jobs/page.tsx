import { Locale } from 'next-intl';
import { Button } from '@/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/ui/dialog';
import { FormJobCreate } from '@/components/form/job/create';

type Props = {
  params: Promise<{
    locale: Locale
  }>
}

export default async function JobsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className='p-12'>
      <h1>Jobs Page</h1>

      <Dialog>
        <DialogTrigger asChild>
          <Button>Create job</Button>
        </DialogTrigger>
        <DialogContent className='sm:max-w-3xl max-h-dvh'>
          <DialogHeader>
            <DialogTitle>
              Create job
            </DialogTitle>
            <DialogDescription>
              Create a new job
            </DialogDescription>
          </DialogHeader>
          <div className='max-h-full overflow-y-auto'>
            <FormJobCreate />
            {/*<SpeechToText />*/}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
