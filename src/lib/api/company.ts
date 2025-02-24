import { Session } from 'next-auth';

import { Company } from '@/types/company';
import { Pagination } from '@/types/pagination';

export async function getCompanies({
  session,
  page,
  pageSize,
}: {
  session: Session | null
} & Pagination): Promise<Company[]> {
  const response = await fetch(process.env.API_URL + '/companies', {

  });

  return await response.json();
}
