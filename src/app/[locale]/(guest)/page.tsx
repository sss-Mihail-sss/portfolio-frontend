import { type Metadata } from 'next';
import { type Locale } from 'next-intl';

import { getPathname } from '@/config/i18n/navigation';
import { locales } from '@/config/i18n/routing';
import { getMeta } from '@/lib/api/meta';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  try {
    const meta = await getMeta('/home', locale);

    if (meta.error) {
      return {
        title: 'Home Page',
        description: 'Welcome to the home page',
        keywords: ['Mihail', 'mihai', 'Portfolio'],
      };
    }

    return meta.data;
  } catch (_) {
    return {
      title: 'Home Page',
      description: 'Welcome to the home page',
      keywords: ['Mihail', 'mihai', 'Portfolio'],
      alternates: {
        canonical: getPathname({ href: '/', locale: locale as Locale }),
        languages: locales.reduce(
          (acc, l) => {
            acc[locale] = getPathname({ href: '/', locale: l });
            return acc;
          },
          {} as { [key: string]: string },
        ),
      },
    };
  }
}

export default async function Page() {
  return <h1>main page</h1>;
}
