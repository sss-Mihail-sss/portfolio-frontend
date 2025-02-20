'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSetAtom } from 'jotai';
import { useStepsContext } from '@ark-ui/react/steps';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';
import { Input } from '@/ui/input';
import { TextEditor } from '@/ui/editor';

import { jobAtom } from '@/stores/jotai';
import { Button } from '@/ui/button';
import { getCompanies } from '@/api/company';
import { Suspense } from 'react';

const formSchema = z.object({
  title: z.string().min(3).max(255),
  company: z.string().refine(value => {
    let number = Number(value);
    return !isNaN(number) && value?.length > 0;
  }),
  description: z.string().max(255),
  requirements: z.string().max(255),
});

type FormValues = z.infer<typeof formSchema>;

const Step1 = () => {
  const setJob = useSetAtom(jobAtom);
  const { goToNextStep, setStep } = useStepsContext();

  const companies = getCompanies();

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      requirements: '',
    },
  });

  const handleSubmitAI = form.handleSubmit((values: FormValues) => {
    goToNextStep();
  }, (errors) => {
    console.log('AI Errors', errors);
  });

  const handleSave = form.handleSubmit((values: FormValues) => {
    setStep(2);
  }, (errors) => {
    console.log('Save Errors', errors);
  });

  async function onSubmit(values: FormValues) {
    console.log('submit');
    setJob(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder="Developer" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="company"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Company</FormLabel>
              <Suspense fallback={<>Loading...</>}>
                <Select onValueChange={field.onChange} defaultValue={field.value}>
                  <FormControl>
                    <SelectTrigger>
                      <SelectValue placeholder="Select a verified email to display" />
                    </SelectTrigger>
                  </FormControl>
                  <SelectContent position='popper'>
                    <SelectItem value="m@example.com">m@example.com</SelectItem>
                    <SelectItem value="m@google.com">m@google.com</SelectItem>
                    <SelectItem value="m@support.com">m@support.com</SelectItem>
                  </SelectContent>
                </Select>
              </Suspense>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TextEditor
                  placeholder="Typing your description"
                  content={field.value}
                  onChange={field.onChange}
                  limit={500}
                  className="h-48"
                  extensions={[
                    'bold',
                    'italic',
                    'underline',
                    'heading',
                    'align',
                    'bullet-list',
                    'ordered-list',
                  ]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="requirements"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl>
                <TextEditor
                  placeholder="Typing your description"
                  content={field.value}
                  onChange={field.onChange}
                  limit={500}
                  className="h-48"
                  extensions={[
                    'bold',
                    'italic',
                    'underline',
                    'heading',
                    'align',
                    'bullet-list',
                    'ordered-list',
                  ]}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex justify-end gap-2">
          <Button color="info" onClick={handleSubmitAI}>
            Translate with AI
          </Button>
          <Button onClick={handleSave}>
            Submit
          </Button>
        </div>
      </form>
    </Form>
  );
};

export { Step1 };
