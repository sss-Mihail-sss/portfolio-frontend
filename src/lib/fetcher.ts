import deepmerge from 'deepmerge';

import { envClient } from '@/config/env/client';

const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include',
};

type FetchResponse<T = unknown> =
  | {
      message: string;
      statusCode: number;
      data?: T;
    }
  | {
      message: string;
      statusCode: number;
      error: string;
    }
  | {
      message: string;
      statusCode: number;
      data: T[];
      meta: {
        page: number;
        pageSize: number;
        pageCount: number;
        rowCount: number;
      };
    };

export async function fetcher<T>(input: string | URL, initialOptions: RequestInit = {}): Promise<FetchResponse<T>> {
  const url = new URL(input, envClient.apiUrl);
  const options = deepmerge(defaultOptions, initialOptions);

  const response = await fetch(url, options);

  if (!response.ok) {
    const errorData = await response.json();
    throw new Error(errorData.message || 'Ошибка на сервере');
  }

  return await response.json();
}
