import { AlignCenter, AlignJustify, AlignLeft, AlignRight } from '@/components/tiptap/extensions/functionality/align';
import { Divider } from '@/components/tiptap/extensions/functionality/divider';
import { Highlighter } from '@/components/tiptap/extensions/functionality/highlight';
import { Blockquote } from '@/components/tiptap/extensions/marks/blockquote';
import { Code } from '@/components/tiptap/extensions/marks/code';
import { Bold, Italic, Strike, Underline } from '@/components/tiptap/extensions/marks/formatting';
import { HeadingSelect } from '@/components/tiptap/extensions/marks/heading';
import { Link } from '@/components/tiptap/extensions/marks/link';
import type { ExtensionsEnum } from '@/lib/tiptap/extensions';

type Props = {
  extensions?: ExtensionsEnum[];
};

function EditorToolbar({ extensions }: Props) {
  if (!extensions) {
    return;
  }

  return (
    <div className="flex flex-wrap items-center divide-x border-b p-2 *:px-2 *:first:pl-0 *:last:pr-0">
      {extensions.includes('heading') && (
        <div>
          <HeadingSelect />
        </div>
      )}

      {extensions.some((ext) => ['bold', 'italic', 'underline', 'strike', 'link', 'code'].includes(ext)) && (
        <div>
          {extensions.includes('bold') && <Bold />} {extensions.includes('italic') && <Italic />}{' '}
          {extensions.includes('underline') && <Underline />} {extensions.includes('strike') && <Strike />}{' '}
          {extensions.includes('link') && <Link />} {extensions.includes('code') && <Code />}{' '}
          {extensions.includes('blockquote') && <Blockquote />}
        </div>
      )}

      {extensions.includes('align') && (
        <div>
          <AlignLeft /> <AlignCenter /> <AlignRight /> <AlignJustify />
        </div>
      )}

      {extensions.some((ext) => ['divider', 'highlight'].includes(ext)) && (
        <div>
          {extensions.includes('divider') && <Divider />} {extensions.includes('highlight') && <Highlighter />}
        </div>
      )}
    </div>
  );
}

export { EditorToolbar };
