'use client';

import { Stepper, StepperContent } from '@/ui/stepper';

import { Step1 } from './create/step-1';
import { Step2 } from './create/step-2';

const steps = [
  {
    label: 'Complete form',
    component: <Step1 />,
  },
  {
    label: 'Select language',
    component: <Step2 />,
  },
  {
    label: 'Refactoring translate',
    component: <></>,
  },
];

const FormJobCreate = () => {
  return (
    <Stepper count={steps.length}>
      {
        steps.map((step, index) => (
          <StepperContent key={index} index={index} className='space-y-8'>
            {step.component}
          </StepperContent>
        ))
      }
    </Stepper>
  );
};

export { FormJobCreate };
