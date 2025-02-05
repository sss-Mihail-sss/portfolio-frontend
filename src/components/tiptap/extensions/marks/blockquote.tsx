import { useCurrentEditor } from '@tiptap/react';
import { TextQuote } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';

function Blockquote() {
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
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-accent' : ''}
        >
          <TextQuote className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Blockquote
      </TooltipContent>
    </Tooltip>
  );
}

export { Blockquote };
