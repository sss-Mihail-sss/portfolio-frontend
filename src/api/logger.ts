import { Log } from '@/types/log';
import { logError } from '@/lib/logger';

export async function sendInfoLog(log: Log) {
  try {
    const response = await fetch(`${process.env.API_URL}/log/info`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(log),
    });

    if (!response.ok) {
      throw new Error(`Ошибка при отправке лога: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    logError({
      message: 'Failed logging info',
      source: 'fetch',
    });
  }
}
