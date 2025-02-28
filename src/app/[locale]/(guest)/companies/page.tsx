import { Locale } from 'next-intl';
import type { SearchParams } from 'nuqs/server';

import { searchParamsCache } from '@/lib/searchParams';
import { Button } from '@/ui/button';
import { TableCompanies } from '@/components/table/companies';

type Props = {
  params: Promise<{
    locale: Locale
  }>;
  searchParams: Promise<SearchParams>;
}

export default async function Page({ searchParams }: Props) {
  await searchParamsCache.parse(searchParams);

  return (
    <div className='container py-6 space-y-4'>
      <div className='flex justify-between items-center'>
        <h2 className='font-medium'>Companies</h2>
        <Button>
          Create company
        </Button>
      </div>

      <TableCompanies />
    </div>
  );
}
