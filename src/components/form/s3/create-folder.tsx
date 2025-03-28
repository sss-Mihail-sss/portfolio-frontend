'use client';

import { FolderPlusIcon } from 'lucide-react';
import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import { Button } from '@/ui/button';
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/ui/dialog';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { createObject } from '@/actions/s3/object';

const schema = z.object({
  folder: z.string().min(3),
});

function CreateFolder() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      folder: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    const response = await createObject(data);

    console.log(response);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FolderPlusIcon className='size-4' />
          Create folder
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Create new folder
          </DialogTitle>
          <DialogDescription>
            Typing name of folder
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='folder'
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Folder name</FormLabel>
                  <FormControl>
                    <Input placeholder='images' {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <DialogClose asChild>
                <Button variant='outline'>
                  Cancel
                </Button>
              </DialogClose>

              <Button type='submit'>
                Save
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}

export { CreateFolder };
