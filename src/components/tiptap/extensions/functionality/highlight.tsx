import { useCurrentEditor } from '@tiptap/react';
import { HighlighterIcon } from 'lucide-react';

import { Button } from '@/ui/button';
import { Tooltip, TooltipContent, TooltipTrigger } from '@/ui/tooltip';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { ToggleGroup, ToggleGroupItem } from '@/ui/toggle-group';

function Highlighter() {
  const { editor } = useCurrentEditor();

  if (!editor) {
    return;
  }

  const handleChangeValue = (value: string) => {
    editor.chain().focus().toggleHighlight({ color: '#b197fc' }).run()
  };

  return (
    <Popover>
      <Tooltip>
        <TooltipTrigger asChild>
          <PopoverTrigger asChild>
            <Button
              size="icon"
              variant="ghost"
              // onClick={() => editor.chain().focus().toggleHighlight().run()}
            >
              <HighlighterIcon className="size-4" />
            </Button>
          </PopoverTrigger>
        </TooltipTrigger>
        <TooltipContent className="fill-primary">
          Highlight
        </TooltipContent>
      </Tooltip>
      <PopoverContent>
        <ToggleGroup
          type="single"
          variant="spaced"
          className="flex flex-wrap items-center justify-around gap-2"
          onValueChange={handleChangeValue}
        >
          <ToggleGroupItem value="red" className="size-6 bg-red-600" />
          <ToggleGroupItem value="blue" className="size-6 bg-blue-600" />
          <ToggleGroupItem value="orange" className="size-6 bg-orange-600" />
          <ToggleGroupItem value="green" className="size-6 bg-green-600" />
          <ToggleGroupItem value="purple" className="size-6 bg-purple-600" />
          <ToggleGroupItem value="yellow" className="size-6 bg-yellow-600" />
        </ToggleGroup>
      </PopoverContent>
    </Popover>
  );
}

export { Highlighter };
