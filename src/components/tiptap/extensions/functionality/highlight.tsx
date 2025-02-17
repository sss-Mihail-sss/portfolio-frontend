import { useCurrentEditor } from '@tiptap/react';
import { HighlighterIcon } from 'lucide-react';

import { Button } from '@/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';
import { cn } from '@/lib/utils';

const colors = {
  'bg-yellow-300': '#FDFF00',
  'bg-orange-400': '#FF9A00',
  'bg-lime-400': '#00FF04',
  'bg-sky-500': '#00C5FF',
  'bg-fuchsia-500': '#FF00A7',
};

function Highlighter() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  const handleChangeValue = (value: string) => {
    editor.chain().focus().toggleHighlight({ color: value }).run();
  };

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              size='icon'
              variant='ghost'
              // onClick={() => editor.chain().focus().toggleHighlight().run()}
            >
              <HighlighterIcon className='size-4' />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className='fill-primary'>
          Highlight
        </TooltipContent>
      </Tooltip>
      <PopoverContent>
        <ToggleGroup
          type='single'
          variant='spaced'
          className='flex flex-wrap items-center justify-around gap-2'
          onValueChange={handleChangeValue}
        >
          {
            Object.entries(colors).map(([color, hex]) => (
              <ToggleGroupItem key={hex} value={hex} className={cn('size-6', color)} />
            ))
          }
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
}

export { Highlighter };
