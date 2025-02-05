import { useCurrentEditor } from '@tiptap/react';
import { PilcrowIcon } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';

function Paragraph() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="icon"
          variant="ghost"
          onClick={() => editor.chain().focus().setParagraph().run()}
          className={editor.isActive('paragraph') ? 'bg-accent' : ''}
        >
          <PilcrowIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Paragraph
      </TooltipContent>
    </Tooltip>
  );
}

export { Paragraph };
