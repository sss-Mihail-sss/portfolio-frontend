import { useCurrentEditor } from '@tiptap/react';
import { TextQuote } from 'lucide-react';

import { Button } from '@/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Blockquote() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size="sq-md"
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBlockquote().run()}
          className={editor.isActive('blockquote') ? 'bg-accent' : ''}
        >
          <TextQuote className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Blockquote</TooltipContent>
    </Tooltip>
  );
}

export { Blockquote };
