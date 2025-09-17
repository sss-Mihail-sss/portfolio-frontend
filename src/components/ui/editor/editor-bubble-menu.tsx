import { BubbleMenu } from '@tiptap/react/menus';

import { Code } from '@/components/tiptap/extensions/marks/code';
import { Bold, Italic, Strike, Underline } from '@/components/tiptap/extensions/marks/formatting';
import { type ExtensionsEnum } from '@/lib/integrations/tiptap';

type Props = {
  extensions?: ExtensionsEnum[];
};

function EditorBubbleMenu({ extensions }: Props) {
  if (!extensions) {
    return;
  }

  const haveBubbleMenuExtension = extensions.some((ext) =>
    ['bold', 'italic', 'underline', 'strike', 'code'].includes(ext),
  );

  if (!haveBubbleMenuExtension) {
    return;
  }

  return (
    <BubbleMenu>
      <div className="relative flex rounded-xs bg-background shadow">
        {extensions.includes('bold') && <Bold />}
        {extensions.includes('italic') && <Italic />}
        {extensions.includes('underline') && <Underline />}
        {extensions.includes('strike') && <Strike />}
        {extensions.includes('code') && <Code />}
      </div>
    </BubbleMenu>
  );
}

export { EditorBubbleMenu };
