'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { getCompanies } from '@/lib/api/company';

export function useCompanies() {
  const { data, status } = useSession();

  return useQuery({
    queryKey: ['companies', data],
    queryFn: () => getCompanies(data),
    enabled: status === 'authenticated' || status === 'unauthenticated',
  });
}
