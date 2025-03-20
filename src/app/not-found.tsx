import Error from 'next/error';

import { BaseLayout } from '@/components/layouts/base';
import { routing } from '@/i18n/routing';

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <Error statusCode={404} />
    </BaseLayout>
  );
}
