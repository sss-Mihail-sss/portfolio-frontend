import { useCurrentEditor } from '@tiptap/react';
import { Heading1Icon, Heading2Icon, Heading3Icon, Heading4Icon, Heading5Icon } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';

function Heading1() {
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
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''}
        >
          <Heading1Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Heading 1
      </TooltipContent>
    </Tooltip>
  );
}

function Heading2() {
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
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-accent' : ''}
        >
          <Heading2Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Heading 2
      </TooltipContent>
    </Tooltip>
  );
}

function Heading3() {
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
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-accent' : ''}
        >
          <Heading3Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Heading 3
      </TooltipContent>
    </Tooltip>
  );
}

function Heading4() {
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
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'bg-accent' : ''}
        >
          <Heading4Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Heading 4
      </TooltipContent>
    </Tooltip>
  );
}

function Heading5() {
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
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'bg-accent' : ''}
        >
          <Heading5Icon className="size-4" />
        </Button>
      </TooltipTrigger>
      <TooltipContent className="fill-primary">
        Heading 5
      </TooltipContent>
    </Tooltip>
  );
}

export { Heading1, Heading2, Heading3, Heading4, Heading5 };
