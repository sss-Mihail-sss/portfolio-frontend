'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, CircleAlertIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useForgotPasswordConfirmCodeMutation } from '@/lib/mutations/auth';
import {
  type ForgotPasswordCodeSchema,
  type ForgotPasswordSchema,
  forgotPasswordCodeSchema,
} from '@/schemas/forgot-password';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Link } from '@/ui/link';
import { OneTimePassword } from '@/ui/one-time-password';

type Props = {
  onSubmit: (data: ForgotPasswordCodeSchema) => void;
  values: ForgotPasswordSchema;
};

const ForgotPasswordStep2 = ({ onSubmit, values: initialValues }: Props) => {
  const t = useTranslations();
  const { mutate } = useForgotPasswordConfirmCodeMutation();

  const form = useForm<ForgotPasswordCodeSchema>({
    resolver: zodResolver(forgotPasswordCodeSchema),
    defaultValues: {
      ...initialValues,
      code: '',
    },
  });

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit((values) =>
          mutate(values, {
            onSuccess: () => {
              onSubmit(values);
            },
            onError: (error: Error) => {
              toast.error('Error', {
                description: error.message,
                icon: <CircleAlertIcon />,
              });
            },
          }),
        )}
        className="mt-6 flex flex-col gap-6"
      >
        <FormField
          name="code"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('code')}</FormLabel>
              <FormControl>
                <OneTimePassword
                  autoSubmit
                  value={field.value}
                  onValueChange={field.onChange}
                  length={6}
                  validationType="alphanumeric"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col gap-2">
          <Button
            color="brand"
            type="submit"
          >
            {t('continue')}
          </Button>
          <Button
            variant="ghost"
            asChild
          >
            <Link
              unstyled
              href="/login"
              className="no-underline"
            >
              <ArrowLeftIcon /> {t('back-to-login')}
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { ForgotPasswordStep2 };
