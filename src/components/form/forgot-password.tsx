'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowLeftIcon, CircleAlertIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { getCountries } from 'react-phone-number-input';
import { toast } from 'sonner';
import { Virtualizer } from 'virtua';

import { useForgotPasswordMutation } from '@/lib/mutations/auth';
import { type ForgotPasswordSchema, forgotPasswordSchema } from '@/schemas/forgot-password';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

const ForgotPassword = () => {
  const t = useTranslations();
  const { mutate } = useForgotPasswordMutation();

  const form = useForm<ForgotPasswordSchema>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: '',
      phone: '',
      code: 'MD',
    },
  });

  const type = form.watch('type');
  const countries = getCountries();

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
                    Use phone
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
                    Use email
                  </Button>
                </div>
                <div className="flex justify-center">
                  <FormField
                    control={form.control}
                    name="code"
                    render={({ field }) => (
                      <FormItem>
                        <Select {...field}>
                          <FormControl>
                            <SelectTrigger className="w-24 rounded-r-none">
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent position="popper">
                            <Virtualizer
                              overscan={2}
                              keepMounted={[countries.indexOf(field.value) ?? undefined]}
                            >
                              {countries.map((country) => (
                                <SelectItem
                                  key={country}
                                  value={country}
                                >
                                  {country}
                                </SelectItem>
                              ))}
                            </Virtualizer>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormControl>
                    <Input
                      className="w-full rounded-l-none"
                      type="tel"
                      placeholder="+373 (67) 288 269"
                      {...field}
                    />
                  </FormControl>
                </div>
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
