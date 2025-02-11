import { useCurrentEditor } from '@tiptap/react';
import { Heading1Icon, Heading2Icon, Heading3Icon, Heading4Icon, Heading5Icon, PilcrowIcon } from 'lucide-react';

import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Button } from '@/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

function Heading1() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button
          size='icon'
          variant='ghost'
          onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
          className={editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''}
        >
          <Heading1Icon className='size-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
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
          size='icon'
          variant='ghost'
          onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
          className={editor.isActive('heading', { level: 2 }) ? 'bg-accent' : ''}
        >
          <Heading2Icon className='size-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
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
          size='icon'
          variant='ghost'
          onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
          className={editor.isActive('heading', { level: 3 }) ? 'bg-accent' : ''}
        >
          <Heading3Icon className='size-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
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
          size='icon'
          variant='ghost'
          onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
          className={editor.isActive('heading', { level: 4 }) ? 'bg-accent' : ''}
        >
          <Heading4Icon className='size-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
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
          size='icon'
          variant='ghost'
          onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
          className={editor.isActive('heading', { level: 5 }) ? 'bg-accent' : ''}
        >
          <Heading5Icon className='size-4' />
        </Button>
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
        Heading 5
      </TooltipContent>
    </Tooltip>
  );
}

function HeadingSelect() {
  const { editor } = useCurrentEditor();
  let value = 'paragraph';

  if (!editor) {
    return;
  }

  if (editor.isActive('heading', { level: 1 })) {
    value = 'heading1';
  } else if (editor.isActive('heading', { level: 2 })) {
    value = 'heading2';
  } else if (editor.isActive('heading', { level: 3 })) {
    value = 'heading3';
  } else if (editor.isActive('heading', { level: 4 })) {
    value = 'heading4';
  } else if (editor.isActive('heading', { level: 5 })) {
    value = 'heading5';
  }

  const handleChange = (value: string) => {
    switch (value) {
      case 'paragraph':
        editor.chain().focus().setParagraph().run();
        break;

      case 'heading1':
        editor.chain().focus().setHeading({ level: 1 }).run();
        break;

      case 'heading2':
        editor.chain().focus().setHeading({ level: 2 }).run();
        break;

      case 'heading3':
        editor.chain().focus().setHeading({ level: 3 }).run();
        break;

      case 'heading4':
        editor.chain().focus().setHeading({ level: 4 }).run();
        break;

      case 'heading5':
        editor.chain().focus().setHeading({ level: 5 }).run();
        break;
    }
  };

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className='w-40'>
        <SelectValue placeholder='Select heading' />
      </SelectTrigger>
      <SelectContent position='popper'>
        <SelectItem value='paragraph'>
          <PilcrowIcon className='size-4' />
          Paragraph
        </SelectItem>
        <SelectItem value='heading1'>
          <Heading1Icon className='size-4' />
          Heading 1
        </SelectItem>
        <SelectItem value='heading2'>
          <Heading2Icon className='size-4' />
          Heading 2
        </SelectItem>
        <SelectItem value='heading3'>
          <Heading3Icon className='size-4' />
          Heading 3
        </SelectItem>
        <SelectItem value='heading4'>
          <Heading4Icon className='size-4' />
          Heading 4
        </SelectItem>
        <SelectItem value='heading5'>
          <Heading5Icon className='size-4' />
          Heading 5
        </SelectItem>
      </SelectContent>
    </Select>
  );
}

export { Heading1, Heading2, Heading3, Heading4, Heading5, HeadingSelect };
