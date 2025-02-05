'use client';

import { useCurrentEditor } from '@tiptap/react';
import { LinkIcon, Trash2Icon } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Input } from '@/ui/input';
import { useState } from 'react';

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
            <Button
              size="icon"
              variant="ghost"
              className={editor.isActive('link') ? 'bg-accent' : ''}
            >
              <LinkIcon className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className="fill-primary">
          Link
        </TooltipContent>
      </Tooltip>
      <PopoverContent className="flex w-auto">
        <Input
          placeholder="https://"
          className="rounded-r-none"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <Button
          className="rounded-none"
          onClick={() => editor.chain().focus().setLink({ href: link }).run()}
        >
          Save
        </Button>
        <Button
          size="icon"
          className="rounded-l-none shrink-0"
          color="error"
          disabled={!editor.isActive('link')}
          onClick={() => editor.chain().focus().unsetLink().run()}
        >
          <Trash2Icon className="size-4" />
        </Button>
      </PopoverContent>
    </Popover>
  );
}

export { Link };
