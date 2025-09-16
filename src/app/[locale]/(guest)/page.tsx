import { type Metadata } from 'next';

import { getMeta } from '@/lib/api/meta';

export async function generateMetadata({ params }: PageProps<'/[locale]'>): Promise<Metadata> {
  const { locale } = await params;
  const meta = await getMeta('/home');

  if (meta.error) {
    return {
      title: 'Home Page',
      description: 'Welcome to the home page',
      keywords: ['Mihail', 'mihai', 'Portfolio'],
    };
  }

  return meta.data;
}

export default async function Page() {
  return <h1>main page</h1>;
}
