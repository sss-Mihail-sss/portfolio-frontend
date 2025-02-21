'use client';

import { useQuery } from '@tanstack/react-query';
import {  getGoogleMapAutocomplete } from '@/lib/api/google';

export function useGoogleMapsAutocomplete(search: string) {
  console.log(search, !!search);

  return useQuery({
    queryKey: ['google-maps-find-text', search],
    queryFn: async () => getGoogleMapAutocomplete(search),
    enabled: !!search,
  });
}
