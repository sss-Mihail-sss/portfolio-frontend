import { Locale } from 'next-intl';

import { CompaniesTable } from './table';

type Props = {
  params: Promise<{
    locale: Locale
  }>
}

export default function Page({}: Props) {
  return (
    <div className='container'>
      <CompaniesTable />
    </div>
  );
}
