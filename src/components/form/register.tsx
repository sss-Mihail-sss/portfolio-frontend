'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { PlusIcon } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { useForm } from 'react-hook-form';

import { useRouter } from '@/config/i18n/navigation';
import { useSignUpMutation } from '@/lib/mutations/auth';
import { type SignUpSchema, signUpSchema } from '@/schemas/sign-up';
import { Button } from '@/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';
import { Password, PasswordInput, PasswordToggle } from '@/ui/password';
import { toast } from '@/ui/sonner';

const RegisterForm = () => {
  const t = useTranslations();
  const { push } = useRouter();
  const { mutate } = useSignUpMutation();

  const form = useForm<SignUpSchema>({
    resolver: zodResolver(signUpSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: SignUpSchema) {
    mutate(values, {
      onSuccess: () => {
        push({
          pathname: '/login',
        });
      },
      onError: (error: Error) => {
        toast({
          title: 'Error',
          description: error.message,
          icon: <PlusIcon />,
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
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.register.fields.username.label')}</FormLabel>
              <FormControl>
                <Input
                  placeholder="maggie"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.register.fields.password.label')}</FormLabel>
              <Password>
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder="******"
                  />
                </FormControl>
                <PasswordToggle />
              </Password>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>{t('form.register.fields.confirm-password.label')}</FormLabel>
              <Password>
                <FormControl>
                  <PasswordInput
                    {...field}
                    placeholder="******"
                  />
                </FormControl>
                <PasswordToggle />
              </Password>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button
          color="brand"
          type="submit"
        >
          {t('submit')}
        </Button>

        {/*<div className="flex items-center gap-2 text-sm">*/}
        {/*  <Separator*/}
        {/*    orientation="horizontal"*/}
        {/*    className="flex-1"*/}
        {/*  />*/}
        {/*  or continue with*/}
        {/*  <Separator*/}
        {/*    orientation="horizontal"*/}
        {/*    className="flex-1"*/}
        {/*  />*/}
        {/*</div>*/}

        {/*<div className="flex flex-wrap justify-center gap-4 [&>button]:basis-20">*/}
        {/*  <Button*/}
        {/*    variant="outline"*/}
        {/*    size="lg"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      src="/logos/google/short.svg"*/}
        {/*      alt="Google logo"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*      className="shrink-0"*/}
        {/*    />*/}
        {/*    <span className="sr-only">{t('form.login.social.google')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    variant="outline"*/}
        {/*    size="lg"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      className="block dark:hidden"*/}
        {/*      src="/logos/github/short.png"*/}
        {/*      alt="Github logo dark"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <Image*/}
        {/*      className="hidden dark:block"*/}
        {/*      src="/logos/github/short-white.png"*/}
        {/*      alt="Github logo white"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <span className="sr-only">{t('form.login.social.github')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    variant="outline"*/}
        {/*    size="lg"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      src="/logos/facebook/short.png"*/}
        {/*      alt="Github logo"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <span className="sr-only">{t('form.login.social.facebook')}</span>*/}
        {/*  </Button>*/}
        {/*  <Button*/}
        {/*    variant="outline"*/}
        {/*    size="lg"*/}
        {/*  >*/}
        {/*    <Image*/}
        {/*      src="/logos/linkedin/short.png"*/}
        {/*      alt="Linkedin logo"*/}
        {/*      width={24}*/}
        {/*      height={24}*/}
        {/*    />*/}
        {/*    <span className="sr-only">{t('form.login.social.linkedin')}</span>*/}
        {/*  </Button>*/}
        {/*</div>*/}

        <div className="text-center text-sm">
          {t('already-have-an-account')}?&nbsp;
          <Link
            href="/login"
            underline
          >
            {t('sign-in')}
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { RegisterForm };
