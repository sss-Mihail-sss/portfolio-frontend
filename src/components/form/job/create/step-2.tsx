'use client';

import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useLocale } from 'next-intl';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { locales } from '@/lib/i18n/routing';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';
import { getLanguageName } from '@/lib/intl';

const formSchema = z.object({
  languages: z.array(z.enum(locales)).min(1),
});

const Step2 = () => {
  const currentLocale = useLocale();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="languages"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Languages</FormLabel>
              <FormControl>
                <ToggleGroup
                  type="multiple"
                  className="justify-start"
                  variant="outline"
                  onValueChange={field.onChange}
                  value={field.value}
                >
                  {
                    locales.map(locale => (
                      <ToggleGroupItem value={locale} key={locale} className="capitalize">
                        {getLanguageName(currentLocale, locale)}
                      </ToggleGroupItem>
                    ))
                  }
                </ToggleGroup>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </form>
    </Form>
  );
};

export { Step2 };
