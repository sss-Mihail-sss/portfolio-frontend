import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { useSetAtom } from 'jotai';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { TextEditor } from '@/ui/editor';

import { jobAtom } from '@/stores/jotai';
import { Button } from '@/ui/button';
import { useStepsContext } from '@ark-ui/react/steps';

const formSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().max(255),
  requirements: z.string().max(255),
});

const Step1 = () => {
  const setJob = useSetAtom(jobAtom);
  const { goToNextStep, setStep } = useStepsContext();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      requirements: '',
    },
  });

  const handleSubmitAI = () => {
    console.log('AI');
    form.handleSubmit((values: z.infer<typeof formSchema>) => {
      console.log('AI ok', values);
    }, (errors) => {
      console.log('AI Errors', errors);
    });
    // goToNextStep();
  }

  const handleSave = () => {
    console.log('Save');
    form.handleSubmit((values: z.infer<typeof formSchema>) => {
      console.log('Save ok', values);
    }, (errors) => {
      console.log('Save Errors', errors);
    });
    // setStep(2);
  }

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setJob(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
        <FormField
          control={form.control}
          name='title'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Title</FormLabel>
              <FormControl>
                <Input placeholder='Developer' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='description'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TextEditor
                  placeholder='Typing your description'
                  content={field.value}
                  onChange={field.onChange}
                  limit={500}
                  className='h-48'
                  extensions={[
                    'bold',
                    'italic',
                    'underline',
                    'strike',
                    'link',
                    'code',
                    'heading',
                    'align',
                    'blockquote',
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
          name='requirements'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Requirements</FormLabel>
              <FormControl>
                <TextEditor
                  placeholder='Typing your description'
                  content={field.value}
                  onChange={field.onChange}
                  limit={500}
                  className='h-48'
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

        <div className='flex justify-end gap-2'>
          <Button color='info' onClick={handleSubmitAI}>
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
