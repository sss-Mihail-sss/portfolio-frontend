'use client';

import { useEffect, useState } from 'react';

import { useDebounce } from '@/hooks/use-debounce';
import { useSearch } from '@/lib/queries/search';
import {
  Autocomplete,
  AutocompleteEmpty,
  AutocompleteInput,
  AutocompleteItem,
  AutocompleteList,
  AutocompletePopup,
  AutocompletePortal,
  AutocompletePositioner,
  AutocompleteStatus,
} from '@/ui/base-ui/autocomplete';
import { Button } from '@/ui/button';
import { Input } from '@/ui/input';

const Search = () => {
  const [isLoading, setLoading] = useState<boolean>(false);
  const [search, setSearch] = useState('');
  const debounceValue = useDebounce(search, 500);
  const { data = [], isFetched } = useSearch(debounceValue);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Incorrect dependency array.
  useEffect(() => {
    setLoading(true);
  }, [search]);

  // biome-ignore lint/correctness/useExhaustiveDependencies: Incorrect dependency array.
  useEffect(() => {
    setLoading(false);
  }, [isFetched]);

  return (
    <Autocomplete
      items={data}
      value={search}
      onValueChange={setSearch}
      filter={null}
    >
      <div className="flex items-center gap-2 rounded bg-overlay p-4 shadow-overlay">
        <AutocompleteInput
          className="w-full"
          render={<Input />}
        />
        <Button>Cauta</Button>
      </div>

      <AutocompletePortal>
        <AutocompletePositioner
          sideOffset={8}
          align="start"
        >
          <AutocompletePopup aria-busy={isLoading}>
            <AutocompleteStatus>{isLoading ? 'Loading...' : `${data.length} result found`}</AutocompleteStatus>
            <AutocompleteEmpty>No results found.</AutocompleteEmpty>
            <AutocompleteList>
              {(item) => (
                <AutocompleteItem
                  key={item.id}
                  value={item.title}
                  className="flex cursor-default select-none py-2 pr-8 pl-4 text-base text-sm leading-4 outline-none data-[highlighted]:relative data-[highlighted]:z-0 data-[highlighted]:text-gray-50 data-[highlighted]:before:absolute data-[highlighted]:before:inset-x-2 data-[highlighted]:before:inset-y-0 data-[highlighted]:before:z-[-1] data-[highlighted]:before:rounded-sm data-[highlighted]:before:bg-neutral-subtle"
                >
                  {item.title}
                </AutocompleteItem>
              )}
            </AutocompleteList>
          </AutocompletePopup>
        </AutocompletePositioner>
      </AutocompletePortal>
    </Autocomplete>
  );
};

export { Search };
