'use client';

import { useQuery } from '@tanstack/react-query';
import { useSession } from 'next-auth/react';

import { getCompanies } from '@/lib/api/company';
import { Pagination } from '@/types/pagination';

export function useCompanies({
  page = 1,
  pageSize = 25,
}: Pagination) {
  const { data, status } = useSession();

  return useQuery({
    queryKey: ['companies', data, page, pageSize],
    queryFn: () => getCompanies({
      session: data,
      page,
      pageSize,
    }),
    enabled: status === 'authenticated' || status === 'unauthenticated',
  });
}
