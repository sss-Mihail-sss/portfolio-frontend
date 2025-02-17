'use client';

import { BubbleMenu, EditorContent, EditorContext, useEditor } from '@tiptap/react';

import { HeadingSelect } from '@/components/tiptap/extensions/marks/heading';
import { Bold, Italic, Strike, Underline } from '@/components/tiptap/extensions/marks/formatting';
import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from '@/components/tiptap/extensions/functionality/align';
import { Link } from '@/components/tiptap/extensions/marks/link';
import { Code } from '@/components/tiptap/extensions/marks/code';
import { Blockquote } from '@/components/tiptap/extensions/marks/blockquote';

import { configureExtensions, ExtensionsEnum } from '@/lib/tiptap/extensions';
import { Divider } from '@/components/tiptap/extensions/functionality/divider';
import { Highlighter } from '@/components/tiptap/extensions/functionality/highlight';
import { ColorPicker } from '@/components/color-picker';

type TextEditorProps = {
  placeholder?: string;
  content: string;
  onChange: (content: string) => void;
  extensions?: ExtensionsEnum[];
}

const TextEditor = ({ content, placeholder, onChange, extensions }: TextEditorProps) => {
  const editor = useEditor({
    extensions: configureExtensions(extensions, placeholder),
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
      <div className="border rounded">
        {
          (extensions && extensions.length > 0) && (
            <div className="flex flex-wrap items-center p-2 border-b divide-x *:px-2 *:first:pl-0 *:last:pr-0">
              {
                extensions.includes('heading') && (
                  <div>
                    <HeadingSelect />
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
                extensions.includes('align') && (
                  <div>
                    <AlignLeft />
                    <AlignCenter />
                    <AlignRight />
                    <AlignJustify />
                  </div>
                )
              }

              <div>
                <Divider />
                {extensions.includes('highlight') && (<Highlighter />)}
              </div>
            </div>
          )
        }

        <BubbleMenu editor={editor}>
          <div className="relative flex bg-background shadow rounded-xs">
            <Bold />
            <Italic />
            <Underline />
            <Strike />
            <Code />
          </div>
        </BubbleMenu>

        <EditorContent editor={editor} className="p-2" />
      </div>
    </EditorContext>
  );
};

export { TextEditor };
