import { useCurrentEditor } from '@tiptap/react';
import { BoldIcon, ItalicIcon, StrikethroughIcon, UnderlineIcon } from 'lucide-react';

import { IconButton } from '@/ui/icon-button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';

function Bold() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().toggleBold().run()}
          className={editor.isActive('bold') ? 'bg-accent' : ''}
        >
          <BoldIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Bold</TooltipContent>
    </Tooltip>
  );
}

function Italic() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().toggleItalic().run()}
          className={editor.isActive('italic') ? 'bg-accent' : ''}
        >
          <ItalicIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Italic</TooltipContent>
    </Tooltip>
  );
}

function Strike() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().toggleStrike().run()}
          className={editor.isActive('strike') ? 'bg-accent' : ''}
        >
          <StrikethroughIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Strike</TooltipContent>
    </Tooltip>
  );
}

function Underline() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <IconButton
          variant="ghost"
          onClick={() => editor.chain().focus().toggleUnderline().run()}
          className={editor.isActive('underline') ? 'bg-accent' : ''}
        >
          <UnderlineIcon className="size-4" />
        </IconButton>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">Underline</TooltipContent>
    </Tooltip>
  );
}

export { Bold, Italic, Underline, Strike };
