import { useCurrentEditor } from '@tiptap/react';
import { TextQuote } from 'lucide-react';

import { IconButton } from '@/ui/icon-button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Blockquote() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-accent' : ''}
        >
          <TextQuote className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Blockquote</TooltipContent>
    </Tooltip>
  );
}

export { Blockquote };
