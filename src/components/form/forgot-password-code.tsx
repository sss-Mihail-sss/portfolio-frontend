'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { addSeconds } from 'date-fns';
import { ArrowLeftIcon } from 'lucide-react';
import { useFormatter, useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { useCountdown } from '@/hooks/use-countdown';
import { useForgotPasswordConfirmCodeMutation } from '@/lib/mutations/auth';
import { type ForgotPasswordCodeSchema, forgotPasswordCodeSchema } from '@/schemas/forgot-password-code';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Link } from '@/ui/link';
import { OneTimePassword } from '@/ui/one-time-password';
import { toast } from '@/ui/sonner';

const ForgotPasswordCode = () => {
  const t = useTranslations();

  const { mutate, isPending } = useForgotPasswordConfirmCodeMutation();

  const form = useForm<ForgotPasswordCodeSchema>({
    resolver: zodResolver(forgotPasswordCodeSchema),
    defaultValues: {
      code: '',
    },
  });

  function onSubmit(values: ForgotPasswordCodeSchema) {
    mutate(values, {
      onSuccess: () => {
        toast({
          type: 'success',
          title: 'Success verify OTP code',
          description: 'OTP code verified successfully. Please reset your password.',
        });
      },
      onError: () => {
        toast({
          type: 'error',
          title: 'Incorrect OTP code',
          description: 'The OTP code you entered is incorrect. Please try again.',
        });
      },
    });
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="mt-6 flex flex-col gap-6"
      >
        <FormField
          control={form.control}
          name="code"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Codu de confirmare</FormLabel>
              <FormControl>
                <OneTimePassword
                  autoSubmit
                  length={6}
                  value={field.value}
                  onValueChange={field.onChange}
                  className="justify-center"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <ForgotPasswordCodeExpired />

        <div className="flex flex-col gap-2">
          <Button
            color="brand"
            type="submit"
            isLoading={isPending}
          >
            Verify code
          </Button>
          <Button
            variant="ghost"
            disabled
          >
            Resend OTP code
          </Button>
        </div>
      </form>
    </Form>
  );
};

const ForgotPasswordCodeExpired = () => {
  const { count } = useCountdown({ countStart: 600 });
  const minutes = Math.floor(count / 60)
    .toString()
    .padStart(2, '0');
  const seconds = (count % 60).toString().padStart(2, '0');

  return (
    <div className="text-xs">
      OTP code expired in: <span>{`${minutes}:${seconds}`}</span>
    </div>
  );
};

export { ForgotPasswordCode };
