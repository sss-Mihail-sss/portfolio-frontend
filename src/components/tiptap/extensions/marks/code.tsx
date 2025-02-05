import { useCurrentEditor } from '@tiptap/react';
import { CodeIcon } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';

function Code() {
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
          onClick={() => editor.chain().focus().toggleCodeBlock().run()}
          className={editor.isActive('codeBlock') ? 'bg-accent' : ''}
        >
          <CodeIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Code
      </TooltipContent>
    </Tooltip>
  );
}

export { Code };
