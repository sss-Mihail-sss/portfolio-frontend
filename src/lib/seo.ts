import { Metadata } from 'next';
import { getLocale } from 'next-intl/server';

import { getPathname } from '@/i18n/navigation';
import { locales, Pathnames } from '@/i18n/routing';

export async function generateAlternates({ href }: { href: Pathnames }): Promise<Metadata['alternates']> {
  const locale = await getLocale();

  return {
    canonical: getPathname({ locale, href }),
    languages: locales.reduce((acc, locale) => {
      acc[locale] = getPathname({ locale, href });
      return acc;
    }, {} as { [key: string]: string }),
  };
}
