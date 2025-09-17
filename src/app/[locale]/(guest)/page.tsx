import { type Metadata } from 'next';

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
    };
  }
}

export default async function Page() {
  return <h1>main page</h1>;
}
