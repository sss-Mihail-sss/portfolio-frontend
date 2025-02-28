import { Locale } from 'next-intl';
import { dehydrate, HydrationBoundary, QueryClient } from '@tanstack/react-query';
import type { SearchParams } from 'nuqs/server';

import { loadSearchParams, searchParamsCache } from '@/lib/searchParams';
import { Button } from '@/ui/button';
import { TableCompanies } from '@/components/table/companies';
import { getCompanies } from '@/lib/api/company';

type Props = {
  params: Promise<{
    locale: Locale
  }>;
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  await searchParamsCache.parse(searchParams);

  const params = await loadSearchParams(searchParams);
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['companies', params],
    queryFn: () => getCompanies({
      pagination: {
        pageIndex: params.pageIndex,
        pageSize: params.pageSize,
      },
    }),
  });

  return (
    <div className='container-wrapper py-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium'>Companies</h2>
        <Button>
          Create company
        </Button>
      </div>

      <HydrationBoundary state={dehydrate(queryClient)}>
        <TableCompanies />
      </HydrationBoundary>
    </div>
  );
}
