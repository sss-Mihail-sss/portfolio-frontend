import { BaseLayout } from '@/components/layouts/base';
import { routing } from '@/lib/i18n/routing';

export default function GlobalNotFound() {
  return (
    <BaseLayout locale={routing.defaultLocale}>
      <>
        404
      </>
    </BaseLayout>
  );
}
