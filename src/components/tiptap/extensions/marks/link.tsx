'use client';

import { useCurrentEditor } from '@tiptap/react';
import { Link2Icon, Trash2Icon } from 'lucide-react';
import { useState } from 'react';

import { Button } from '@/ui/button';
import { IconButton } from '@/ui/icon-button';
import { Input } from '@/ui/input';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Link() {
  const { editor } = useCurrentEditor();
  const [link, setLink] = useState('');

  if (!editor) {
    return;
  }

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <IconButton
              variant="ghost"
              className={editor.isActive('link') ? 'bg-accent' : ''}
            >
              <Link2Icon className="size-4" />
            </IconButton>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className="fill-primary">Link</TooltipContent>
      </Tooltip>
      <PopoverContent className="flex w-auto flex-col gap-2">
        <Input
          placeholder="https://"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <div className="flex justify-between">
          <Button onClick={() => editor.chain().focus().setLink({ href: link }).run()}>Save</Button>
          <IconButton
            color="danger"
            disabled={!editor.isActive('link')}
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            <Trash2Icon className="size-4" />
          </IconButton>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { Link };
