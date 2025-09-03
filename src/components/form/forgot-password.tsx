'use client';

import { useState } from 'react';

import { ForgotPasswordStep1 } from '@/components/form/forgot-password/forgot-password-step-1';
import { ForgotPasswordStep2 } from '@/components/form/forgot-password/forgot-password-step-2';
import { ForgotPasswordStep3 } from '@/components/form/forgot-password/forgot-password-step-3';
import type { ForgotPasswordSchema } from '@/schemas/forgot-password';

const ForgotPassword = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState<ForgotPasswordSchema>();

  if (step === 1) {
    return (
      <ForgotPasswordStep1
        onSubmit={(values) => {
          setData(values);
          setStep(2);
        }}
      />
    );
  }

  if (step === 2 && data) {
    return (
      <ForgotPasswordStep2
        values={data}
        onSubmit={(values) => {
          setData(values);
          setStep(3);
        }}
      />
    );
  }

  return <ForgotPasswordStep3 />;
};

export { ForgotPassword };
