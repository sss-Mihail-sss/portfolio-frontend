'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { z } from 'zod';
import { CheckIcon, ChevronsUpDownIcon } from 'lucide-react';
import { useSetAtom } from 'jotai';
import { useStepsContext } from '@ark-ui/react/steps';
import { zodResolver } from '@hookform/resolvers/zod';
import { useDebounce } from '@uidotdev/usehooks';
import { APIProvider, Map } from '@vis.gl/react-google-maps';

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';
import { Input } from '@/ui/input';
import { TextEditor } from '@/ui/editor';
import { Button } from '@/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from '@/ui/command';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/ui/dialog';

import { jobAtom } from '@/stores/jotai';
import { useCompanies } from '@/lib/hooks/useCompany';
import { useGoogleMapsAutocomplete } from '@/lib/hooks/useGoogle';
import { cn } from '@/lib/utils';

const formSchema = z.object({
  title: z.string().min(3).max(255),
  company: z.string().refine(value => {
    let number = Number(value);
    return !isNaN(number) && value?.length > 0;
  }),
  address: z.string(),
  description: z.string().max(500),
  requirements: z.string().max(500),
});

type FormValues = z.infer<typeof formSchema>;

const Step1 = () => {
  const setJob = useSetAtom(jobAtom);
  const { goToNextStep, setStep } = useStepsContext();
  const [placeSearch, setPlaceSearch] = useState<string>('');

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: '',
      description: '',
      requirements: '',
    },
  });

  const placeSearchDebounce = useDebounce(placeSearch, 1000);

  const { data: companies, status } = useCompanies();
  const { data: places, status: placeStatus, isLoading } = useGoogleMapsAutocomplete(placeSearchDebounce);

  const handleSubmitAI = form.handleSubmit(async (values: FormValues) => {
    goToNextStep();
    await onSubmit(values);
  }, (errors) => {
    console.log('AI Errors', errors);
  });

  const handleSave = form.handleSubmit(async (values: FormValues) => {
    setStep(2);
    await onSubmit(values);
  }, (errors) => {
    console.log('Save Errors', errors);
  });

  async function onSubmit(values: FormValues) {
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
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger disabled={status === 'pending'}>
                    <SelectValue
                      placeholder={
                        status === 'pending' ? 'Loading...' :
                          status === 'error' ? 'Error...' :
                            'Select a company'
                      }
                    />
                  </SelectTrigger>
                </FormControl>
                <SelectContent className="z-50" position="popper">
                  {
                    status === 'pending' ? (
                      <SelectItem value="loading">Loading...</SelectItem>
                    ) : status === 'error' ? (
                      <SelectItem value="error">Error...</SelectItem>
                    ) : companies.map((company) => (
                      <SelectItem value={String(company.id)} key={company.id}>
                        {company.name}
                      </SelectItem>
                    ))
                  }
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <Dialog>
              <DialogTrigger>
                <FormItem>
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Developer" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              </DialogTrigger>
              <DialogContent className="p-0 sm:max-w-9/10 overflow-hidden">
                <DialogHeader className="sr-only">
                  <DialogTitle>
                    Select job address
                  </DialogTitle>
                  <DialogDescription>
                    Select job address
                  </DialogDescription>
                </DialogHeader>
                <div className="h-300 max-h-9/10">
                  <APIProvider apiKey={process.env.GOOGLE_PLACE_API_KEY}>
                    <Map
                      styles={[
                        {
                          featureType: 'poi',
                          stylers: [{ visibility: 'off' }],
                        },
                      ]}
                      defaultCenter={{
                        lat: 47.0147319,
                        lng: 28.8421226
                      }}
                      defaultZoom={12}
                      cameraControl={false}
                      mapTypeControl={false}
                      streetViewControl={false}
                      fullscreenControl={false}
                    />
                  </APIProvider>
                </div>
              </DialogContent>
            </Dialog>
          )}
        />

        <FormField
          control={form.control}
          name="address"
          render={({ field }) => (
            <FormItem className="flex flex-col">
              <FormLabel>Address</FormLabel>
              <Popover>
                <PopoverTrigger asChild>
                  <FormControl>
                    <Button
                      variant="outline"
                      role="combobox"
                      className={cn(
                        'w-full justify-between',
                        !field.value && 'text-muted-foreground',
                      )}
                    >
                      {
                        (field.value && placeStatus === 'success' && places?.suggestions?.length)
                          ? places?.suggestions.find(
                            place => place.placePrediction.place === field.value,
                          )?.placePrediction.text.text
                          : 'Select address'
                      }
                      <ChevronsUpDownIcon className="size-4 opacity-50" />
                    </Button>
                  </FormControl>
                </PopoverTrigger>
                <PopoverContent className="w-[var(--radix-popover-trigger-width)] p-0">
                  <Command shouldFilter={false}>
                    <CommandInput
                      placeholder="Search address..."
                      className="h-9"
                      value={placeSearch}
                      onValueChange={setPlaceSearch}
                    />
                    <CommandList>
                      <CommandEmpty>No place found.</CommandEmpty>
                      <CommandGroup>
                        {
                          isLoading ? (
                            <CommandItem value="loading" disabled>Loading...</CommandItem>
                          ) : placeStatus === 'error' ? (
                            <CommandItem value="error">Error...</CommandItem>
                          ) : places?.suggestions.map((place) => (
                            <CommandItem
                              value={place.placePrediction.place}
                              key={place.placePrediction.place}
                              onSelect={() => {
                                form.setValue('address', place.placePrediction.place, {
                                  shouldValidate: true,
                                  shouldDirty: true,
                                });
                              }}
                            >
                              {place.placePrediction.text.text}
                              <CheckIcon
                                className={cn(
                                  'ml-auto',
                                  place.placePrediction.place === field.value
                                    ? 'opacity-100'
                                    : 'opacity-0',
                                )}
                              />
                            </CommandItem>
                          ))
                        }
                      </CommandGroup>
                    </CommandList>
                  </Command>
                </PopoverContent>
              </Popover>
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
