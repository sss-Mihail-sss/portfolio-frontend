'use client';

import Image from 'next/image';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { toast } from 'sonner';
import { z } from 'zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Link } from '@/ui/link';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';

const LoginForm = () => {
  const loginSchema = z.object({
    username: z.string().nonempty().min(2),
    password: z.string().nonempty().min(8),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className='mt-2 rounded-md bg-slate-950 p-4'>
          <code className='text-white whitespace-pre-wrap'>{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='flex flex-col px-4 py-8 xs:px-12 md:px-24 max-w-lg gap-6'>
        <div className='text-center'>
          <h1 className='text-2xl font-bold'>Login to your account</h1>
          <p className='text-balance text-sm text-muted-foreground'>Enter your username below to login to your
            account</p>
        </div>

        <FormField
          name='username'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder='maggie' {...field} />
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
                <FormLabel>Password</FormLabel>
                <Link href='/forgot-password'>
                  Forgot your password?
                </Link>
              </div>
              <FormControl>
                <Input placeholder='password' type='password' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type='submit'>Submit</Button>

        <div className='flex items-center gap-2 text-sm'>
          <Separator orientation='horizontal' className='flex-1' />
          or continue with
          <Separator orientation='horizontal' className='flex-1' />
        </div>

        <div className='flex flex-col gap-4'>
          <Button variant='outline'>
            <Image src='/logos/google/short.svg' alt='Google logo' width={24} height={24} />
            Log in with Google
          </Button>
          <Button variant='outline'>
            <Image
              className='block dark:hidden'
              src='/logos/github/short.png'
              alt='Github logo'
              width={24}
              height={24}
            />
            <Image
              className='hidden dark:block'
              src='/logos/github/short-white.png'
              alt='Github logo'
              width={24}
              height={24}
            />
            Log in with Github
          </Button>
          <Button variant='outline'>
            <Image src='/logos/facebook/short.png' alt='Github logo' width={24} height={24} />
            Log in with Facebook
          </Button>
          <Button variant='outline'>
            <Image src='/logos/linkedin/short.png' alt='Linkedin logo' width={24} height={24} />
            Log in with LinkedIn
          </Button>
        </div>

        <div className='text-center text-sm'>
          Don&apos;t have an account?&nbsp;
          <Link href='/register' className='underline'>
            Sign up
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { LoginForm };
