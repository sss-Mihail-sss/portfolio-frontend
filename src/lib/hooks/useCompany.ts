'use client';

import { useQuery, keepPreviousData } from '@tanstack/react-query';

import { getCompanies } from '@/lib/api/company';
import { Pagination } from '@/types/pagination';

export function useCompanies({
  pagination,
}: {
  pagination: Pagination
}) {
  return useQuery({
    queryKey: ['companies', pagination],
    queryFn: () => getCompanies({
      pagination,
    }),
    placeholderData: keepPreviousData
  });
}
