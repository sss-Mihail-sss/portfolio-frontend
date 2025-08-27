'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, CircleAlertIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useForgotPasswordMutation } from '@/lib/mutations/auth';
import { type ForgotPasswordSchema, forgotPasswordSchema } from '@/schemas/forgot-password';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';
import { PhoneInput } from '@/ui/phone-input';

const ForgotPassword = () => {
  const t = useTranslations();
  const { mutate } = useForgotPasswordMutation();

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      type: 'email',
      email: '',
    },
  });

  const type = form.watch('type');

  async function onSubmit(values: ForgotPasswordSchema) {
    mutate(values, {
      onSuccess: () => {
        // TODO:
      },
      onError: (error: Error) => {
        toast.error('Error', {
          description: error.message,
          icon: <CircleAlertIcon />,
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
        {type === 'email' ? (
          <FormField
            name="email"
            key="email"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>{t('email')}</FormLabel>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => form.setValue('type', 'phone')}
                  >
                    {t('use-phone')}
                  </Button>
                </div>
                <FormControl>
                  <Input
                    type="email"
                    placeholder="john@example.com"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        ) : (
          <FormField
            name="phone"
            key="phone"
            control={form.control}
            render={({ field }) => (
              <FormItem>
                <div className="flex items-center justify-between gap-2">
                  <FormLabel>{t('phone')}</FormLabel>
                  <Button
                    variant="ghost"
                    size="xs"
                    onClick={() => form.setValue('type', 'email')}
                  >
                    {t('use-email')}
                  </Button>
                </div>
                <FormControl>
                  <PhoneInput
                    defaultCountry="MD"
                    countries={['MD', 'RO', 'RU', 'UA']}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        )}

        <div className="flex flex-col gap-2">
          <Button
            color="brand"
            type="submit"
          >
            {t('reset-password')}
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

export { ForgotPassword };
