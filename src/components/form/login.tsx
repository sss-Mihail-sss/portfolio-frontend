'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';
import { z } from 'zod/v4-mini';

import { useRouter } from '@/config/i18n/navigation';
import { signIn } from '@/lib/api/auth';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';
import { Password, PasswordInput, PasswordToggle } from '@/ui/password';
import { toast } from '@/ui/sonner';

const LoginForm = () => {
  const { push } = useRouter();
  const t = useTranslations();

  const signInSchema = z.object({
    identifier: z.string().check(z.trim(), z.minLength(2, t('validation.username-required'))),
    password: z.string().check(
      z.trim(),
      z.minLength(8, t('validation.password-min-length', { length: 8 })),
      z.maxLength(32, t('validation.password-min-length', { length: 32 })),
      // biome-ignore lint/performance/useTopLevelRegex: zod
      z.regex(/[a-zA-Z]/, t('validation.contains-letters')),
      // biome-ignore lint/performance/useTopLevelRegex: zod
      z.regex(/[0-9]/, t('validation.contains-numbers')),
      // biome-ignore lint/performance/useTopLevelRegex: zod
      z.regex(/[^a-zA-Z0-9]/, t('validation.contains-special-characters')),
    ),
  });

  type SignInSchema = z.infer<typeof signInSchema>;

  const form = useForm<SignInSchema>({
    resolver: zodResolver(signInSchema),
    defaultValues: {
      identifier: '',
      password: '',
    },
  });

  async function onSubmit(values: SignInSchema) {
    try {
      await signIn(values);
      push({
        pathname: '/dashboard',
      });
    } catch (error) {
      console.log(error);
      toast({
        title: 'Error',
        description: 'Description',
        icon: <PlusIcon />,
      });
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <FormField
          name="identifier"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('username')}</FormLabel>
              <FormControl>
                <Input
                  placeholder="john"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          control={form.control}
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.login.fields.password.label')}</FormLabel>
              <FormControl>
                <Password>
                  <PasswordInput
                    {...field}
                    placeholder="john@123"
                  />
                  <PasswordToggle />
                </Password>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Link
          underline
          href="/forgot-password"
        >
          {t('forgot-password')}?
        </Link>

        <Button type="submit">{t('submit')}</Button>

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

        <div className="text-center text-sm">
          {t('no-account')}{' '}
          <Link
            href="/register"
            underline
            variant="secondary"
            className="font-medium"
          >
            {t('sign-up')}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { LoginForm };
