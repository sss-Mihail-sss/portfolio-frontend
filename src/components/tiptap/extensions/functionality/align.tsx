import { useCurrentEditor } from '@tiptap/react';
import { AlignCenterIcon, AlignJustifyIcon, AlignLeftIcon, AlignRightIcon } from 'lucide-react';

import { IconButton } from '@/ui/icon-button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function AlignLeft() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('left').run()}
          className={editor.isActive({ textAlign: 'left' }) ? 'bg-accent' : ''}
        >
          <AlignLeftIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Align Left</TooltipContent>
    </Tooltip>
  );
}

function AlignCenter() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('center').run()}
          className={editor.isActive({ textAlign: 'center' }) ? 'bg-accent' : ''}
        >
          <AlignCenterIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Align Center</TooltipContent>
    </Tooltip>
  );
}

function AlignRight() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('right').run()}
          className={editor.isActive({ textAlign: 'right' }) ? 'bg-accent' : ''}
        >
          <AlignRightIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Align Right</TooltipContent>
    </Tooltip>
  );
}
function AlignJustify() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().setTextAlign('justify').run()}
          className={editor.isActive({ textAlign: 'justify' }) ? 'bg-accent' : ''}
        >
          <AlignJustifyIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Align Justify</TooltipContent>
    </Tooltip>
  );
}

export { AlignLeft, AlignCenter, AlignRight, AlignJustify };
