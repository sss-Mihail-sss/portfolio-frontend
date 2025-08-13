'use client';

import { type Editor, useEditorState } from '@tiptap/react';

type Props = {
  editor: Editor;
  limit: number;
};

function EditorCharactersCount({ editor, limit }: Props) {
  const { charactersCount, wordsCount } = useEditorState({
    editor,
    selector: (context) => ({
      charactersCount: context.editor.storage.characterCount.characters(),
      wordsCount: context.editor.storage.characterCount.words(),
    }),
  });

  if (!editor) {
    return;
  }

  return (
    <div className="absolute right-1 bottom-0 text-xs">
      <span>
        {charactersCount} / {limit}
      </span>
      &nbsp;<span>({wordsCount} words)</span>
    </div>
  );
}

export { EditorCharactersCount };
