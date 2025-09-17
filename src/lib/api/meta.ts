import { get } from '@/lib/fetcher';
import { type Metadata } from '@/types/metadata';

export async function getMeta(page: string, locale: string) {
  return get<Metadata>(`/meta?page=${page}&lang=${locale}`);
}
