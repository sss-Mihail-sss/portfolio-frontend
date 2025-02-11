import { useCurrentEditor } from '@tiptap/react';
import {
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  ListIcon,
  ListOrderedIcon,
  PilcrowIcon,
  TextQuote,
} from 'lucide-react';
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/ui/select';

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
  } else if (editor.isActive('bulletList')) {
    value = 'bullet-list';
  } else if (editor.isActive('orderedList', { level: 5 })) {
    value = 'ordered-list';
  }

  const handleChange = (value: string) => {
    switch ( value ) {
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

      case 'bullet-list':
        editor.chain().focus().toggleBulletList().run();
        break;

      case 'ordered-list':
        editor.chain().focus().toggleOrderedList().run();
        break;
    }
  };

  return (
    <Select value={value} onValueChange={handleChange}>
      <SelectTrigger className="w-40 whitespace-nowrap">
        <SelectValue placeholder="Select format" />
      </SelectTrigger>
      <SelectContent position="popper">
        <SelectGroup>
          <SelectLabel>
            Hierarchy
          </SelectLabel>
          <SelectItem value="paragraph">
            <PilcrowIcon className="size-4" />
            Paragraph
          </SelectItem>
          <SelectItem value="heading1">
            <Heading1Icon className="size-4" />
            Heading 1
          </SelectItem>
          <SelectItem value="heading2">
            <Heading2Icon className="size-4" />
            Heading 2
          </SelectItem>
          <SelectItem value="heading3">
            <Heading3Icon className="size-4" />
            Heading 3
          </SelectItem>
          <SelectItem value="heading4">
            <Heading4Icon className="size-4" />
            Heading 4
          </SelectItem>
          <SelectItem value="heading5">
            <Heading5Icon className="size-4" />
            Heading 5
          </SelectItem>
        </SelectGroup>

        <SelectGroup>
          <SelectLabel>
            List
          </SelectLabel>
          <SelectItem value="bullet-list">
            <ListIcon className="size-4" />
            Bullet List
          </SelectItem>
          <SelectItem value="ordered-list">
            <ListOrderedIcon className="size-4" />
            Ordered List
          </SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
}

export { HeadingSelect };
