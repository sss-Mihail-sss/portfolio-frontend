'use client';

import { EditorContent, EditorContext, type JSONContent, type UseEditorOptions, useEditor } from '@tiptap/react';

import { type ExtensionsEnum } from '@/lib/integrations/tiptap';
import { configureExtensions } from '@/lib/integrations/tiptap';
import { cn } from '@/lib/utils/classnames';
import { EditorBubbleMenu } from '@/ui/editor/editor-bubble-menu';
import { EditorCharactersCount } from '@/ui/editor/editor-characters-count';
import { EditorToolbar } from '@/ui/editor/editor-toolbar';

type TextEditorProps = {
  onChange: (content: JSONContent) => void;
  placeholder?: string;
  className?: string;
  extensions?: ExtensionsEnum[];
  limit?: number;
} & UseEditorOptions;

function TextEditor({ className, content, placeholder, onChange, extensions, limit }: TextEditorProps) {
  const editor = useEditor({
    extensions: configureExtensions({
      extensions,
      placeholder,
      limit,
    }),
    immediatelyRender: false,
    injectCSS: false,
    enableContentCheck: true,
    enableInputRules: [],
    editorProps: {
      attributes: {
        class: 'outline-none',
      },
    },
    content,
    onUpdate({ editor: editorUpdate }) {
      const value = editorUpdate.getJSON();
      onChange(value);
    },
  });

  if (!editor) {
    return null;
  }

  return (
    <EditorContext value={{ editor }}>
      <div className={cn('relative overflow-auto rounded border', className)}>
        <EditorToolbar extensions={extensions} />
        <EditorBubbleMenu extensions={extensions} />

        {!!limit && (
          <EditorCharactersCount
            editor={editor}
            limit={limit}
          />
        )}

        <EditorContent
          editor={editor}
          className="p-2 text-sm"
        />
      </div>
    </EditorContext>
  );
}

export { TextEditor };
