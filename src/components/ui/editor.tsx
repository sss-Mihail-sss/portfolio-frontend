'use client';

import { EditorContent, EditorContext, useEditor } from '@tiptap/react';
import { BubbleMenu } from '@tiptap/react/menus';

import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from '@/components/tiptap/extensions/functionality/align';
import { Divider } from '@/components/tiptap/extensions/functionality/divider';
import { Highlighter } from '@/components/tiptap/extensions/functionality/highlight';
import { Blockquote } from '@/components/tiptap/extensions/marks/blockquote';
import { Code } from '@/components/tiptap/extensions/marks/code';
import { Bold, Italic, Strike, Underline } from '@/components/tiptap/extensions/marks/formatting';
import { HeadingSelect } from '@/components/tiptap/extensions/marks/heading';
import { Link } from '@/components/tiptap/extensions/marks/link';
import type { ExtensionsEnum } from '@/lib/tiptap/extensions';
import { configureExtensions } from '@/lib/tiptap/extensions';
import { cn } from '@/lib/utils';

type TextEditorProps = {
  content: string;
  onChange: (content: string) => void;
  placeholder?: string;
  className?: string;
  extensions?: ExtensionsEnum[];
  limit?: number;
};

const TextEditor = ({ className, content, placeholder, onChange, extensions, limit }: TextEditorProps) => {
  const editor = useEditor({
    extensions: configureExtensions({
      extensions,
      placeholder,
      limit,
    }),
    immediatelyRender: false,
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    content: content,
    onUpdate({ editor }) {
      const value = editor.getHTML();
      onChange(value);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContext value={{ editor }}>
      <div className={cn('overflow-auto relative border rounded', className)}>
        {extensions && extensions.length > 0 && (
          <div className="flex flex-wrap items-center p-2 border-b divide-x *:px-2 *:first:pl-0 *:last:pr-0">
            {extensions.includes('heading') && (
              <div>
                <HeadingSelect />
              </div>
            )}

            {extensions.some((ext) => ['bold', 'italic', 'underline', 'strike', 'link', 'code'].includes(ext)) && (
              <div>
                {extensions.includes('bold') && <Bold />}
                {extensions.includes('italic') && <Italic />}
                {extensions.includes('underline') && <Underline />}
                {extensions.includes('strike') && <Strike />}
                {extensions.includes('link') && <Link />}
                {extensions.includes('code') && <Code />}
                {extensions.includes('blockquote') && <Blockquote />}
              </div>
            )}

            {extensions.includes('align') && (
              <div>
                <AlignLeft />
                <AlignCenter />
                <AlignRight />
                <AlignJustify />
              </div>
            )}

            {extensions.some((ext) => ['divider', 'highlight'].includes(ext)) && (
              <div>
                {extensions.includes('divider') && <Divider />}
                {extensions.includes('highlight') && <Highlighter />}
              </div>
            )}
          </div>
        )}

        {extensions && extensions.some((ext) => ['bold', 'italic', 'underline', 'strike', 'code'].includes(ext)) && (
          <BubbleMenu editor={editor}>
            <div className="relative flex bg-background shadow rounded-xs">
              {extensions.includes('bold') && <Bold />}
              {extensions.includes('italic') && <Italic />}
              {extensions.includes('underline') && <Underline />}
              {extensions.includes('strike') && <Strike />}
              {extensions.includes('code') && <Code />}
            </div>
          </BubbleMenu>
        )}

        {!!limit && (
          <div className="absolute text-xs bottom-0 right-1">
            <span>
              {editor.storage.characterCount.characters()} / {limit}
            </span>
            &nbsp;
            <span>({editor.storage.characterCount.words()} words)</span>
          </div>
        )}

        <EditorContent
          editor={editor}
          className="p-2 text-sm"
        />
      </div>
    </EditorContext>
  );
};

export { TextEditor };
