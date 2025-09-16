import { get } from '@/lib/fetcher';

export async function getMeta(page: string) {
  return get<{
    title: string;
    description: string;
    keywords: string[];
  }>(`/meta?page=${page}`);
}
