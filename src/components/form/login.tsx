'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { z } from '@zod/mini';
import parsePhoneNumber from 'libphonenumber-js';
import { EyeIcon } from 'lucide-react';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Link } from '@/ui/link';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';

const LoginForm = () => {
  const t = useTranslations();
  const [isVisiblePassword, setVisiblePassword] = useState<boolean>(false);

  const schema = z.object({
    username: z.string().check(z.trim(), z.minLength(2)),
    email: z.email(),
    phone: z.string().check(z.refine((value) => parsePhoneNumber(value)?.isValid())),
    password: z.string().check(
      z.trim(),
      z.minLength(8),
      z.regex(/[a-zA-Z]/),
      z.regex(/[0-9]/),
      z.regex(/[^a-zA-Z0-9]/),
    ),
  });
  type Schema = z.infer<typeof schema>;

  const form = useForm<Schema>({
    resolver: zodResolver(schema),
    defaultValues: {
      username: '',
      email: '',
      phone: '',
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
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('username-or-email')}</FormLabel>
              <FormControl>
                <Input placeholder='fakeusernme' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name='password'
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <div className='flex items-center justify-between'>
                <FormLabel>{t('form.login.fields.password.label')}</FormLabel>
                <Link href='/forgot-password' className='hover:underline'>
                  {t('forgot-password')}?
                </Link>
              </div>
              <div className='relative'>
                <FormControl>
                  <Input
                    placeholder={t('form.login.fields.password.placeholder')}
                    type={isVisiblePassword ? 'text' : 'password'}
                    {...field}
                  />
                </FormControl>
                <Button
                  className='absolute top-1/2 -translate-y-1/2 right-2'
                  size='icon'
                  variant='ghost'
                  onClick={() => setVisiblePassword(prev => !prev)}
                >
                  <EyeIcon className='size-5' />
                </Button>
              </div>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>{t('submit')}</Button>

        {/*<div className='flex items-center gap-2 text-sm'>*/}
        {/*  <Separator orientation='horizontal' className='flex-1' />*/}
        {/*  {t('or')}*/}
        {/*  <Separator orientation='horizontal' className='flex-1' />*/}
        {/*</div>*/}

        {/*<div className='flex flex-wrap justify-center gap-4 [&>button]:basis-20'>*/}
        {/*  <Button variant='outline' size='lg'>*/}
        {/*    <Image src='/logos/google/short.svg' alt='Google logo' width={24} height={24} className='shrink-0' />*/}
        {/*    <span className='sr-only'>{t('form.login.social.google')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button variant='outline' size='lg'>*/}
        {/*    <Image*/}
        {/*      className='block dark:hidden'*/}
        {/*      src='/logos/github/short.png'*/}
        {/*      alt='Github logo dark'*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <Image*/}
        {/*      className='hidden dark:block'*/}
        {/*      src='/logos/github/short-white.png'*/}
        {/*      alt='Github logo white'*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <span className='sr-only'>{t('form.login.social.github')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button variant='outline' size='lg'>*/}
        {/*    <Image src='/logos/facebook/short.png' alt='Github logo' width={24} height={24} />*/}
        {/*    <span className='sr-only'>{t('form.login.social.facebook')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button variant='outline' size='lg'>*/}
        {/*    <Image src='/logos/linkedin/short.png' alt='Linkedin logo' width={24} height={24} />*/}
        {/*    <span className='sr-only'>{t('form.login.social.linkedin')}</span>*/}
        {/*  </Button>*/}
        {/*</div>*/}

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
