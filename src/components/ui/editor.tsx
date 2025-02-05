'use client';

import { EditorContent, EditorContext, useEditor } from '@tiptap/react';

import { Heading1, Heading2, Heading3, Heading4, Heading5 } from '@/components/tiptap/extensions/marks/heading';
import { Bold, Italic, Strike, Underline } from '@/components/tiptap/extensions/marks/formatting';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from '@/components/tiptap/extensions/functionality/align';
import { Paragraph } from '@/components/tiptap/extensions/marks/paragraph';
import { Link } from '@/components/tiptap/extensions/marks/link';
import { Code } from '@/components/tiptap/extensions/marks/code';

import { configureExtensions, ExtensionsEnum } from '@/lib/tiptap/extensions';
import { Blockquote } from '@/components/tiptap/extensions/marks/blockquote';
import { BulletList } from '@//components/tiptap/extensions/marks/bullet-list';
import { OrderedList } from '@/components/tiptap/extensions/marks/ordered-list';

type TextEditorProps = {
  placeholder?: string;
  content: string;
  onChange: (content: string) => void;
  extensions?: ExtensionsEnum[];
}

const TextEditor = ({ content, placeholder, onChange, extensions }: TextEditorProps) => {
  const editor = useEditor({
    extensions: configureExtensions(extensions, placeholder),
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
      <div className="border rounded">
        {
          (extensions && extensions.length > 0) && (
            <div className="flex flex-wrap items-center p-2 border-b divide-x *:px-2 *:first:pl-0 *:last:pr-0">
              {
                extensions.includes('heading') && (
                  <div>
                    <Heading1 />
                    <Heading2 />
                    <Heading3 />
                    <Heading4 />
                    <Heading5 />
                    <Paragraph />
                  </div>
                )
              }

              {
                extensions.some((ext) => ['bold', 'italic', 'underline', 'strike', 'link', 'code'].includes(ext)) && (
                  <div>
                    {extensions.includes('bold') && (<Bold />)}
                    {extensions.includes('italic') && (<Italic />)}
                    {extensions.includes('underline') && (<Underline />)}
                    {extensions.includes('strike') && (<Strike />)}
                    {extensions.includes('link') && (<Link />)}
                    {extensions.includes('code') && (<Code />)}
                    {extensions.includes('blockquote') && (<Blockquote />)}
                  </div>
                )
              }

              {
                extensions?.includes('align') && (
                  <div>
                    <AlignLeft />
                    <AlignCenter />
                    <AlignRight />
                    <AlignJustify />
                  </div>
                )
              }

              {
                extensions.some((ext) => ['bullet-list', 'ordered-list'].includes(ext)) && (
                  <div>
                    {extensions.includes('bullet-list') && (<BulletList />)}
                    {extensions.includes('ordered-list') && (<OrderedList />)}
                  </div>
                )
              }

            </div>
          )
        }

        <EditorContent editor={editor} className="p-2" />
      </div>
    </EditorContext>
  );
};

export { TextEditor };
