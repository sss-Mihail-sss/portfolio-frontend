'use client';

import { useCurrentEditor } from '@tiptap/react';
import { Link2Icon, Trash2Icon } from 'lucide-react';

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
              <Link2Icon className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className="fill-primary">
          Link
        </TooltipContent>
      </Tooltip>
      <PopoverContent className="flex flex-col gap-2 w-auto">
        <Input
          placeholder="https://"
          value={link}
          onChange={(event) => setLink(event.target.value)}
        />
        <div className="flex justify-between">
          <Button
            onClick={() => editor.chain().focus().setLink({ href: link }).run()}
          >
            Save
          </Button>
          <Button
            size="icon"
            color="error"
            disabled={!editor.isActive('link')}
            onClick={() => editor.chain().focus().unsetLink().run()}
          >
            <Trash2Icon className="size-4" />
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
}

export { Link };
