import deepmerge from 'deepmerge';

const defaultOptions: RequestInit = {
  headers: {
    'Content-Type': 'application/json',
    'Accept': 'application/json'
  },
  credentials: 'include',
};

export async function fetcher(input: string | URL, initialOptions: RequestInit = {}) {
  const url = new URL(input, process.env.API_URL);
  const options = deepmerge(defaultOptions, initialOptions);

  return await fetch(url, options);
}
