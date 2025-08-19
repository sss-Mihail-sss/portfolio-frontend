'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, CircleAlertIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { toast } from 'sonner';

import { useForgotPasswordMutation } from '@/lib/mutations/auth';
import { type ForgotPasswordPhoneSchema, forgotPasswordPhoneSchema } from '@/schemas/forgot-password';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';

const ForgotPasswordPhone = () => {
  const t = useTranslations();
  const { mutate } = useForgotPasswordMutation();

  const form = useForm<ForgotPasswordPhoneSchema>({
    resolver: zodResolver(forgotPasswordPhoneSchema),
    defaultValues: {
      phone: '',
    },
  });

  async function onSubmit(values: ForgotPasswordPhoneSchema) {
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
        <FormField
          name="phone"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className="flex items-center justify-between gap-2">
                <FormLabel>{t('phone')}</FormLabel>
                <Button
                  variant="ghost"
                  size="xs"
                  asChild
                >
                  <Link
                    href="/forgot-password"
                    className="no-underline"
                  >
                    Use email
                  </Link>
                </Button>
              </div>
              <FormControl>
                <Input
                  type="tel"
                  placeholder="+373 (67) 123 456"
                  {...field}
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
            {t('reset-password')}
          </Button>
          <Button
            variant="ghost"
            asChild
          >
            <Link
              href="/login"
              className="no-underline"
            >
              <ArrowLeftIcon />
              {t('back-to-login')}
            </Link>
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { ForgotPasswordPhone };
