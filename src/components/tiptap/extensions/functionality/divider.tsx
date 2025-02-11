import { useCurrentEditor } from '@tiptap/react';
import { MinusIcon } from 'lucide-react';

import { Button } from '@/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Divider() {
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
          onClick={() => editor.chain().focus().setHorizontalRule().run()}
        >
          <MinusIcon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Divider
      </TooltipContent>
    </Tooltip>
  );
}

export { Divider };
