'use client';

import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { toast } from 'sonner';
import { Input } from '@/ui/input';
import { Link } from '@/ui/link';
import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';
import Image from 'next/image';

const RegisterForm = () => {
  const registerSchema = z.object({
    username: z.string(),
    password: z.string().min(6),
    confirmPassword: z.string().min(6),
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      username: '',
      password: '',
      confirmPassword: '',
    },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    toast('You submitted the following values:', {
      description: (
        <pre className="mt-2 rounded-md bg-slate-950 p-4">
          <code className="text-white whitespace-pre-wrap">{JSON.stringify(values, null, 2)}</code>
        </pre>
      ),
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col px-4 py-8 xs:px-12 md:px-24 max-w-lg gap-6">
        <div className="text-center">
          <h1 className="text-2xl font-bold">Create account</h1>
          <p className="text-balance text-sm text-muted-foreground">Enter your username below to login to your
            account</p>
        </div>

        <FormField
          name="username"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Username</FormLabel>
              <FormControl>
                <Input placeholder="maggie" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Password</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          name="confirmPassword"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Confirm Password</FormLabel>
              <FormControl>
                <Input placeholder="******" type="password" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>

        <div className="flex items-center gap-2 text-sm">
          <Separator orientation="horizontal" className="flex-1" />
          or continue with
          <Separator orientation="horizontal" className="flex-1" />
        </div>

        <div className="flex flex-col gap-4">
          <Button variant="outline">
            <Image src="/logos/google/short.svg" alt="Google logo" width={24} height={24} />
            Sign up with Google
          </Button>
          <Button variant="outline">
            <Image
              className="block dark:hidden"
              src="/logos/github/short.png"
              alt="Github logo"
              width={24}
              height={24}
            />
            <Image
              className="hidden dark:block"
              src="/logos/github/short-white.png"
              alt="Github logo"
              width={24}
              height={24}
            />
            Sign up with Github
          </Button>
          <Button variant="outline">
            <Image src="/logos/facebook/short.png" alt="Facebook logo" width={24} height={24} />
            Sign up with Facebook
          </Button>
          <Button variant="outline">
            <Image src="/logos/linkedin/short.png" alt="Linkedin logo" width={24} height={24} />
            Sign up with LinkedIn
          </Button>
        </div>

        <div className="text-center text-sm">
          Already have an account?&nbsp;
          <Link href="/login" className="underline">
            Sign in
          </Link>
        </div>
      </form>
    </Form>
  );
};

export { RegisterForm };
