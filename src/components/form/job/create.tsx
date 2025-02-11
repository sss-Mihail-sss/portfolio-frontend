'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/ui/input';
import { Button } from '@/ui/button';
import { TextEditor } from '@/ui/editor';

const formSchema = z.object({
  title: z.string().min(3).max(255),
  description: z.string().max(255),
  requirements: z.string().max(255),
});

const testContent = `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph</p>
        <p><a href="https://en.wikipedia.org/wiki/World_Wide_Web">This is link.</a></p>
        <p><u>This is underlined.</u></p>
        <p><b>This is bold.</b></p>
        <p><i>This is italic.</i></p>
        <pre><code>for (var i=1; i <= 20; i++) {
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
      `;

const FormJobCreate = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: testContent,
      requirements: '',
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
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
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Description</FormLabel>
              <FormControl>
                <TextEditor
                  placeholder="Typing your description"
                  content={field.value}
                  onChange={field.onChange}
                  extensions={[
                    'bold', 'italic', 'underline', 'strike', 'link', 'code', 'heading', 'align', 'blockquote', 'bullet-list', 'ordered-list', 'highlight',
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
                <Input placeholder="" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
};

export { FormJobCreate };
