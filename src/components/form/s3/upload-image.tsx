'use client';

import { z } from 'zod';
import { useForm } from 'react-hook-form';
import { FilePlusIcon } from 'lucide-react';
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
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/ui/form';
import { Input } from '@/ui/input';
import { FileUpload } from '@/ui/file-upload';

const schema = z.object({
  files: z.array(z.instanceof(File)),
});

function UploadImage() {
  const form = useForm({
    resolver: zodResolver(schema),
    defaultValues: {
      files: [],
    },
  });

  const onSubmit = async (data: z.infer<typeof schema>) => {
    console.log(data);
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <FilePlusIcon className='size-4' />
          <span>
            Upload file(s)
          </span>
        </Button>
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>
            Upload file
          </DialogTitle>
          <DialogDescription className='sr-only'>
            Upload file here
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
            <FormField
              name='files'
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <FileUpload />
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

export { UploadImage };
