'use client';

import { ComponentProps } from 'react';
import { Steps, useSteps, useStepsContext, UseStepsProps } from '@ark-ui/react/steps';

import { cn } from '@/lib/utils';
import { Button } from '@/ui/button';

type StepperProps = Omit<ComponentProps<typeof Steps.RootProvider>, 'value'> & UseStepsProps;

function Stepper({
  count,
  orientation,
  id,
  ids,
  step,
  linear,
  defaultStep,
  onStepComplete,
  onStepChange,
  className,
  ...props
}: StepperProps) {
  const steps = useSteps({
    count,
    orientation,
    ids,
    id,
    linear,
    step,
    defaultStep,
    onStepComplete,
    onStepChange,
  });

  return (
    <Steps.RootProvider className={cn('spacy-y-4', className)} value={steps} {...props} />
  );
}

function StepperList({ className, ...props }: ComponentProps<typeof Steps.List>) {
  return (
    <Steps.List
      className={cn('flex gap-2 items-center justify-between', className)}
      {...props}
    />
  );
}

function StepperListItem({ trigger, indicator, children, className, ...props }: ComponentProps<typeof Steps.Item> & {
  trigger?: boolean;
  indicator?: boolean;
}) {
  const Component = trigger ? Steps.Trigger : 'div';

  return (
    <Steps.Item
      className='w-full flex gap-2 items-center last:flex-0 last:[&>[data-part=separator]]:hidden'
      {...props}
    >
      <Component
        className={cn('flex gap-2 items-center whitespace-nowrap', trigger && 'cursor-pointer', className)}
      >
        {
          indicator && (
            <Steps.Indicator
              className='font-medium flex items-center justify-center size-12 bg-accent rounded-full
              data-[current]:text-primary-foreground data-[current]:bg-primary
              data-[complete]:text-primary-foreground data-[complete]:bg-primary'
            >
              {props.index + 1}
            </Steps.Indicator>
          )
        }
        {children}
      </Component>

      <Steps.Separator className='flex-1 bg-accent h-0.5 data-[complete]:bg-primary' />
    </Steps.Item>
  );
}

function StepperContent({ className, ...props }: ComponentProps<typeof Steps.Content>) {
  return (
    <Steps.Content className={cn('py-4', className)} {...props} />
  );
}

function StepperCompletedContent({ ...props }: ComponentProps<typeof Steps.CompletedContent>) {
  return (
    <Steps.CompletedContent {...props} />
  );
}

function StepperPrevTrigger({ ...props }: ComponentProps<typeof Steps.PrevTrigger>) {
  return (
    <Steps.PrevTrigger {...props} asChild>
      <Button>
        Previous
      </Button>
    </Steps.PrevTrigger>
  );
}

function StepperNextTrigger({ ...props }: ComponentProps<typeof Steps.NextTrigger>) {
  const { count, value } = useStepsContext();

  return (
    <Steps.NextTrigger {...props} asChild>
      <Button>
        {value === count - 1 ? 'Finish' : 'Next'}
      </Button>
    </Steps.NextTrigger>
  );
}

export {
  Stepper,
  StepperContent,
  StepperCompletedContent,
  StepperList,
  StepperListItem,
  StepperPrevTrigger,
  StepperNextTrigger,
};
