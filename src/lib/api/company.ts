import { Company } from '@/types/company';
import { Pagination, PaginationResponse } from '@/types/pagination';
import { serializeWithDefault } from '@/lib/searchParams';
import { withAccessToken } from '@/lib/fetch';

export async function getCompanies({
  pagination,
}: {
  pagination: Pagination;
}): Promise<PaginationResponse<Company>> {
  const url = serializeWithDefault(process.env.API_URL + '/companies', pagination);

  const headers = await withAccessToken({
    'Content-Type': 'application/json',
  });

  const response = await fetch(url, { headers });

  return await response.json();
}
