'use client';

import { useQuery } from '@tanstack/react-query';
import { matchSorter } from 'match-sorter';

import { fakeJobs } from '@/fake/jobs';
// import { search } from '@/lib/api/search';

export function useSearch(query = '') {
  return useQuery({
    queryKey: ['search', query],
    queryFn: async () => {
      return matchSorter(fakeJobs, query, {
        keys: ['title'],
      });
      // const response = await search(query);
      //
      // if (response.error) {
      //   throw new Error(response.message);
      // }
      //
      // return response.data;
    },
    enabled: !!query,
  });
}
