import { Locale } from 'next-intl';
import { Button } from '@/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/ui/dialog';
import { FormJobCreate } from '@/components/form/job/create';
import {
  Stepper,
  StepperContent,
  StepperList,
  StepperListItem,
  StepperNextTrigger,
  StepperPrevTrigger,
} from '@/ui/stepper';

type Props = {
  params: Promise<{
    locale: Locale
  }>
}

const steps = [
  {
    label: 'Complete form',
    component: <></>,
  },
  {
    label: 'Select language',
    component: <></>,
  },
  {
    label: 'Refactoring translate',
    component: <></>,
  },
];

export default async function JobsPage({ params }: Props) {
  const { locale } = await params;

  return (
    <div className='p-12'>
      <h1>Jobs Page</h1>

      <Stepper count={steps.length}>
        <StepperList>
          {
            steps.map((step, index) => (
              <StepperListItem key={index} index={index} indicator>
                {step.label}
              </StepperListItem>
            ))
          }
        </StepperList>

        {
          steps.map((step, index) => (
            <StepperContent key={index} index={index}>
              {step.component}
            </StepperContent>
          ))
        }

        <div>
          <StepperPrevTrigger />
          <StepperNextTrigger />
        </div>
      </Stepper>

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
          <div className='max-h-full'>
            <FormJobCreate />
            {/*<SpeechToText />*/}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
