'use client';

import { useTheme } from 'next-themes';

import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/base-ui/select';

const SelectTheme = () => {
  const { theme: defaultTheme, setTheme, themes } = useTheme();

  return (
    <Select
      value={defaultTheme}
      onValueChange={(value) => setTheme(value as string)}
    >
      <SelectTrigger className="w-auto min-w-32">
        <SelectValue />
      </SelectTrigger>
      <SelectContent>
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
