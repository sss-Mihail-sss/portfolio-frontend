import deepmerge from 'deepmerge';

import { env } from '@/config/env';

const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
  credentials: 'include',
};

export async function fetcher(input: string | URL, initialOptions: RequestInit = {}) {
  const url = new URL(input, env.apiUrl);
  const options = deepmerge(defaultOptions, initialOptions);

  return await fetch(url, options);
}
