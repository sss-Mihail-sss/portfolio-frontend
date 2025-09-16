import deepmerge from 'deepmerge';

import { envClient } from '@/config/env/client';
import { isNull, isUndefined } from '@/lib/utils/validators';
import { type FetchOptions, type FetchResponse } from '@/types/fetcher';

const defaultOptions: FetchOptions = {
  headers: {
    Accept: 'application/json',
  },
  credentials: 'include',
  timeout: 5000,
};

async function fetcher<T>(input: string | URL, initialOptions: FetchOptions = {}): Promise<FetchResponse<T>> {
  const abortController = new AbortController();
  const { signal } = abortController;
  const { timeout, ...options } = deepmerge(defaultOptions, initialOptions);
  const timer = setTimeout(() => abortController.abort(), timeout);

  try {
    const url = new URL(input, envClient.apiUrl);

    const response = await fetch(url, {
      ...options,
      signal,
    });

    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(errorData.message || `Ошибка на сервере: ${response.status}`);
    }

    return await response.json();
  } finally {
    clearTimeout(timer);
  }
}

export async function get<T = 'OK'>(input: string | URL, options?: FetchOptions) {
  return fetcher<T>(input, options);
}

export async function post<T = 'OK'>(input: string | URL, data?: unknown, options?: FetchOptions) {
  return fetcher<T>(input, {
    method: 'POST',
    body: JSON.stringify(data),
    ...(!(isNull(data) || isUndefined(data)) && {
      headers: {
        'Content-Type': 'application/json',
      },
    }),
    ...options,
  });
}

export async function put<T = 'OK'>(input: string | URL, data: object, options?: FetchOptions) {
  return fetcher<T>(input, {
    method: 'PUT',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
}

export async function patch<T = 'OK'>(input: string | URL, data: object, options?: FetchOptions) {
  return fetcher<T>(input, {
    method: 'PATCH',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
    ...options,
  });
}
