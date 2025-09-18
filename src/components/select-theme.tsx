'use client';

import { PaletteIcon } from 'lucide-react';
import { useTheme } from 'next-themes';

import { Select, SelectContent, SelectItem, SelectTrigger } from '@/ui/base-ui/select';
import { IconButton } from '@/ui/icon-button';

const SelectTheme = () => {
  const { theme: defaultTheme, setTheme, themes } = useTheme();

  return (
    <Select
      value={defaultTheme}
      onValueChange={(value) => setTheme(value as string)}
    >
      <SelectTrigger
        nativeButton
        render={<IconButton variant="ghost" />}
      >
        <PaletteIcon className="stroke-[1.5]" />
      </SelectTrigger>
      <SelectContent className="min-w-38">
        {themes.map((theme) => (
          <SelectItem
            key={theme}
            value={theme}
          >
            {theme}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export { SelectTheme };
