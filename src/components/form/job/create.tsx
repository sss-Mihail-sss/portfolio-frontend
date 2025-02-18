'use client';

import { z } from 'zod';
import { useLocale } from 'next-intl';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { TextEditor } from '@/ui/editor';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';

import { locales } from '@/lib/i18n/routing';
import { getLanguageName } from '@/lib/intl';

const formSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().max(255),
  requirements: z.string().max(255),
  languages: z.array(z.enum(locales)).min(1),
});

const FormJobCreate = () => {
  const currentLocale = useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      requirements: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // await translate(values);
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
                    'highlight',
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
                <Input placeholder='' {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name='languages'
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <FormControl>
                <ToggleGroup
                  type='multiple'
                  className='justify-start'
                  variant='outline'
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  {
                    locales.map(locale => (
                      <ToggleGroupItem value={locale} key={locale} className='capitalize'>
                        {getLanguageName(currentLocale, locale)}
                      </ToggleGroupItem>
                    ))
                  }
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        ></FormField>

        <Button type='submit'>Submit</Button>
      </form>
    </Form>
  );
};

export { FormJobCreate };
