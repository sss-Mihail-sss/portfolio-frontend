import { fetcher } from '@/lib/fetcher';
import type { Log } from '@/types/log';

export async function sendInfoLog(log: Log) {
  const response = await fetcher('/log/info', {
    method: 'POST',
    body: JSON.stringify(log),
  });

  if (!response.ok) {
    throw new Error(`Ошибка при отправке лога: ${response.statusText}`);
  }

  return await response.json();
}
