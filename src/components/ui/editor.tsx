'use client';

import { ReactNode, useState } from 'react';
import { EditorContent, useEditor } from '@tiptap/react';
import Document from '@tiptap/extension-document';
import Paragraph from '@tiptap/extension-paragraph';
import Heading from '@tiptap/extension-heading';
import Text from '@tiptap/extension-text';

import Bold from '@tiptap/extension-bold';
import Italic from '@tiptap/extension-italic';
import Link from '@tiptap/extension-link';
import Underline from '@tiptap/extension-underline';
import Placeholder from '@tiptap/extension-placeholder';
import Strike from '@tiptap/extension-strike';
import TextAlign from '@tiptap/extension-text-align';
import CodeBlock from '@tiptap/extension-code-block';

import {
  AlignCenterIcon,
  AlignJustifyIcon,
  AlignLeftIcon,
  AlignRightIcon,
  BoldIcon,
  CodeIcon,
  Heading1Icon,
  Heading2Icon,
  Heading3Icon,
  Heading4Icon,
  Heading5Icon,
  ItalicIcon,
  LinkIcon,
  PilcrowIcon,
  StrikethroughIcon,
  Trash2Icon,
  UnderlineIcon,
} from 'lucide-react';

import { Button } from '@/ui/button';
import { Separator } from '@/ui/separator';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/ui/popover';
import { Input } from '@/ui/input';

type TextEditorProps = {
  placeholder?: string;
  content?: string;
  onChange: (content: string) => void;
}

const SimpleTooltip = ({ children, content }: { children: ReactNode, content: string }) => {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent className='fill-primary'>
        {content}
      </TooltipContent>
    </Tooltip>
  );
};

const TextEditor = ({ content, placeholder, onChange }: TextEditorProps) => {
  const testContent = `
        <h1>Heading 1</h1>
        <h2>Heading 2</h2>
        <h3>Heading 3</h3>
        <h4>Heading 4</h4>
        <h5>Heading 5</h5>
        <p>Paragraph</p>
        <p><a href='https://en.wikipedia.org/wiki/World_Wide_Web'>This is link.</a></p>
        <p><u>This is underlined.</u></p>
        <p><b>This is bold.</b></p>
        <p><i>This is italic.</i></p>
        <pre><code>for (var i=1; i <= 20; i++) {
  if (i % 15 == 0)
    console.log("FizzBuzz");
  else if (i % 3 == 0)
    console.log("Fizz");
  else if (i % 5 == 0)
    console.log("Buzz");
  else
    console.log(i);
}</code></pre>
      `;

  const editor = useEditor({
    extensions: [
      Document,
      Paragraph,
      Text,
      Bold,
      Italic,
      Underline,
      Strike,
      CodeBlock.configure({
        HTMLAttributes: {
          class: 'text-sm bg-gray-800 text-white p-2 rounded',
        },
      }),
      Link.configure({
        openOnClick: false,
        autolink: true,
        defaultProtocol: 'https',
        protocols: ['http', 'https'],
        HTMLAttributes: {
          class: 'underline decoration-blue-600 text-blue-600',
        },
        isAllowedUri: (url, ctx) => {
          try {
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`${ctx.defaultProtocol}://${url}`);

            if (!ctx.defaultValidate(parsedUrl.href)) {
              return false;
            }

            const disallowedProtocols = ['ftp', 'file', 'mailto'];
            const protocol = parsedUrl.protocol.replace(':', '');

            if (disallowedProtocols.includes(protocol)) {
              return false;
            }

            const allowedProtocols = ctx.protocols.map(p => (typeof p === 'string' ? p : p.scheme));

            if (!allowedProtocols.includes(protocol)) {
              return false;
            }

            const disallowedDomains = ['example-phishing.com', 'malicious-site.net'];
            const domain = parsedUrl.hostname;

            if (disallowedDomains.includes(domain)) {
              return false;
            }

            return true;
          } catch {
            return false;
          }
        },
        shouldAutoLink: url => {
          try {
            const parsedUrl = url.includes(':') ? new URL(url) : new URL(`https://${url}`);

            const disallowedDomains = ['example-no-autolink.com', 'another-no-autolink.com'];
            const domain = parsedUrl.hostname;

            return !disallowedDomains.includes(domain);
          } catch {
            return false;
          }
        },
      }),
      Placeholder.configure({
        placeholder,
        emptyNodeClass: 'before:content-[attr(data-placeholder)] before:text-muted-foreground before:pointer-events-none before:h-0 before:float-left',
      }),
      TextAlign.configure({
        types: ['heading', 'paragraph'],
      }),
      Heading.configure({
        levels: [1, 2, 3, 4, 5],
      }),
    ],
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    content: testContent,
    onUpdate({ editor }) {
      const value = editor.getHTML();
      onChange(value);
    },
  });

  const [link, setLink] = useState('');

  // const setLink = useCallback(() => {
  //   if (!editor) {
  //     return;
  //   }
  //
  //   const previousUrl = editor.getAttributes('link').href;
  //   // const url = window.prompt('URL', previousUrl);
  //
  //   // if (url === null) {
  //   //   return;
  //   // }
  //   //
  //   // if (url === '') {
  //   //   editor.chain().focus().extendMarkRange('link').unsetLink().run();
  //   //
  //   //   return;
  //   // }
  //
  //   try {
  //     // editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run();
  //   } catch (error) {
  //     if (error instanceof Error) {
  //       alert(error.message);
  //     }
  //
  //     alert(JSON.stringify(error));
  //   }
  // }, [editor]);

  if (!editor) {
    return null;
  }

  return (
    <div className='border rounded'>
      <div className='flex items-center h-12 p-2 gap-0.5 border-b'>
        <div>
          <SimpleTooltip content='Heading 1'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
              className={editor.isActive('heading', { level: 1 }) ? 'bg-accent' : ''}
            >
              <Heading1Icon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Heading 2'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
              className={editor.isActive('heading', { level: 2 }) ? 'bg-accent' : ''}
            >
              <Heading2Icon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Heading 3'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
              className={editor.isActive('heading', { level: 3 }) ? 'bg-accent' : ''}
            >
              <Heading3Icon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Heading 4'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
              className={editor.isActive('heading', { level: 4 }) ? 'bg-accent' : ''}
            >
              <Heading4Icon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Heading 5'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
              className={editor.isActive('heading', { level: 5 }) ? 'bg-accent' : ''}
            >
              <Heading5Icon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Paragraph'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().setParagraph().run()}
              className={editor.isActive('paragraph') ? 'bg-accent' : ''}
            >
              <PilcrowIcon className='size-4' />
            </Button>
          </SimpleTooltip>
        </div>

        <Separator orientation='vertical' />

        <div>
          <SimpleTooltip content='Bold'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={editor.isActive('bold') ? 'bg-accent' : ''}
            >
              <BoldIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Italic'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={editor.isActive('italic') ? 'bg-accent' : ''}
            >
              <ItalicIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Underline'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={editor.isActive('underline') ? 'bg-accent' : ''}
            >
              <UnderlineIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Strike'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleStrike().run()}
              className={editor.isActive('strike') ? 'bg-accent' : ''}
            >
              <StrikethroughIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <Popover>
            <SimpleTooltip content='Link'>
              <PopoverTrigger asChild>
                <Button
                  size='icon'
                  variant='ghost'
                  className={editor.isActive('link') ? 'bg-accent' : ''}
                >
                  <LinkIcon className='size-4' />
                </Button>
              </PopoverTrigger>
            </SimpleTooltip>
            <PopoverContent className='flex w-auto'>
              <Input
                placeholder='https://'
                className='rounded-r-none'
                value={link}
                onChange={(event) => setLink(event.target.value)}
              />
              <Button
                className='rounded-none'
                onClick={() => editor.chain().focus().setLink({ href: link }).run()}
              >
                Save
              </Button>
              <Button
                size='icon'
                className='rounded-l-none shrink-0'
                color='error'
                disabled={!editor.isActive('link')}
                onClick={() => editor.chain().focus().unsetLink().run()}
              >
                <Trash2Icon className='size-4' />
              </Button>
            </PopoverContent>
          </Popover>
          <SimpleTooltip content='Code'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().toggleCodeBlock().run()}
              className={editor.isActive('codeBlock') ? 'bg-accent' : ''}
            >
              <CodeIcon className='size-4' />
            </Button>
          </SimpleTooltip>
        </div>

        <Separator orientation='vertical' />

        <div>
          <SimpleTooltip content='Left align'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().setTextAlign('left').run()}
              className={editor.isActive({ textAlign: 'left' }) ? 'bg-accent' : ''}
            >
              <AlignLeftIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Center align'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().setTextAlign('center').run()}
              className={editor.isActive({ textAlign: 'center' }) ? 'bg-accent' : ''}
            >
              <AlignCenterIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Right align'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().setTextAlign('right').run()}
              className={editor.isActive({ textAlign: 'right' }) ? 'bg-accent' : ''}
            >
              <AlignRightIcon className='size-4' />
            </Button>
          </SimpleTooltip>
          <SimpleTooltip content='Justify align'>
            <Button
              size='icon'
              variant='ghost'
              onClick={() => editor.chain().focus().setTextAlign('justify').run()}
              className={editor.isActive({ textAlign: 'justify' }) ? 'bg-accent' : ''}
            >
              <AlignJustifyIcon className='size-4' />
            </Button>
          </SimpleTooltip>
        </div>
      </div>

      <EditorContent editor={editor} className='p-2' />
    </div>
  );
};

export { TextEditor };