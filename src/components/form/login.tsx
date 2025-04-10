'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { z } from 'zod';
import parsePhoneNumber from 'libphonenumber-js';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Link } from '@/ui/link';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';

const LoginForm = () => {
  const t = useTranslations();

  const schema = z.object({
    username: z
      .string()
      .min(2, t('validation.field-required', { field: t('username') }))
      .trim()
      .optional(),
    email: z
      .string()
      .email(t('validation.field-invalid', { field: t('email') }))
      .optional(),
    phone: z
      .string()
      .transform((value, ctx) => {
        const phoneNumber = parsePhoneNumber(value);

        if (phoneNumber?.isValid()) {
          ctx.addIssue({
            code: z.ZodIssueCode.custom,
            message: t('validation.field-invalid', { field: t('phone') }),
          });
          return z.NEVER;
        }

        return phoneNumber?.formatInternational();
      })
      .optional(),
    password: z
      .string()
      .min(8)
      .regex(/[a-zA-Z]/, { message: 'Contain at least one letter.' })
      .regex(/[0-9]/, { message: 'Contain at least one number.' })
      .regex(/[^a-zA-Z0-9]/, {
        message: 'Contain at least one special character.',
      })
      .trim(),
  });
  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      password: '',
    },
  });
  console.log(form.formState.errors);

  async function onSubmit(values: Schema) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className='flex flex-col px-4 py-8 xs:px-12 md:px-24 w-full md:w-lg gap-6'
      >
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>
            {t('form.login.title')}
          </h1>
          <p className='text-balance text-sm text-muted-foreground'>
            {t('form.login.description')}
          </p>
        </div>

        <FormField
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('username')}</FormLabel>
              <FormControl>
                <Input placeholder={t('form.login.fields.username.placeholder')} {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='password'
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center justify-between'>
                <FormLabel>{t('form.login.fields.password.label')}</FormLabel>
                <Link href='/forgot-password' className='hover:underline'>
                  {t('forgot-password')}?
                </Link>
              </div>
              <FormControl>
                <Input placeholder={t('form.login.fields.password.placeholder')} type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>{t('submit')}</Button>

        <div className='flex items-center gap-2 text-sm'>
          <Separator orientation='horizontal' className='flex-1' />
          {t('or')}
          <Separator orientation='horizontal' className='flex-1' />
        </div>

        <div className='flex flex-wrap justify-center gap-4 [&>button]:basis-20'>
          <Button variant='outline' size='lg'>
            <Image src='/logos/google/short.svg' alt='Google logo' width={24} height={24} className='shrink-0' />
            <span className='sr-only'>{t('form.login.social.google')}</span>
          </Button>
          <Button variant='outline' size='lg'>
            <Image
              className='block dark:hidden'
              src='/logos/github/short.png'
              alt='Github logo dark'
              width={24}
              height={24}
            />
            <Image
              className='hidden dark:block'
              src='/logos/github/short-white.png'
              alt='Github logo white'
              width={24}
              height={24}
            />
            <span className='sr-only'>{t('form.login.social.github')}</span>
          </Button>
          <Button variant='outline' size='lg'>
            <Image src='/logos/facebook/short.png' alt='Github logo' width={24} height={24} />
            <span className='sr-only'>{t('form.login.social.facebook')}</span>
          </Button>
          <Button variant='outline' size='lg'>
            <Image src='/logos/linkedin/short.png' alt='Linkedin logo' width={24} height={24} />
            <span className='sr-only'>{t('form.login.social.linkedin')}</span>
          </Button>
        </div>

        <div className='text-center text-sm'>
          {t('no-account')}{' '}
          <Link href='/register' className='underline'>
            {t('sign-up')}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { LoginForm };
