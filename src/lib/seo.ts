import { type Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { getPathname } from '@/config/i18n/navigation';
import { type Pathnames } from '@/config/i18n/routing';
import { locales } from '@/config/i18n/routing';

export async function generateAlternates({ href }: { href: Pathnames }): Promise<Metadata['alternates']> {
  const locale = await getLocale();

  return {
    canonical: getPathname({ locale, href }),
    languages: locales.reduce(
      (acc, l) => {
        acc[locale] = getPathname({ locale: l, href });
        return acc;
      },
      {} as { [key: string]: string },
    ),
  };
}
