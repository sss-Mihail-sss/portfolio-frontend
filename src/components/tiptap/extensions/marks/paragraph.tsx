import { useCurrentEditor } from '@tiptap/react';
import { PilcrowIcon } from 'lucide-react';

import { IconButton } from '@/ui/icon-button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Paragraph() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-accent' : ''}
        >
          <PilcrowIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Paragraph</TooltipContent>
    </Tooltip>
  );
}

export { Paragraph };
