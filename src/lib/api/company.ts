import { Company } from '@/types/company';
import { Pagination, PaginationResponse } from '@/types/pagination';
import { serializePagination } from '@/lib/searchParams';
import { withAccessToken } from '@/lib/fetch';

export async function getCompanies({
  pagination,
}: {
  pagination: Pagination;
}): Promise<PaginationResponse<Company>> {
  const url = serializePagination(process.env.API_URL + '/companies', pagination);

  console.log('fetch getCompanies', pagination);

  const response = await fetch(url, {
    headers: await withAccessToken({
      'Content-Type': 'application/json',
    }),
  });

  return await response.json();
}
