import { get } from '@/lib/fetcher';

export async function search(query: string) {
  return get<{ id: number }[]>(`/search?q=${query}`);
}
