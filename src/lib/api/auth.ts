import { fetcher } from '@/lib/fetcher';
import type { SignInSchema } from '@/schemas/sign-in';

export async function signIn(data: SignInSchema) {
  const response = await fetcher('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });

  const json: FetchResponse = await response.json();

  if (!response.ok) {
    throw new Error(json.message);
  }

  return json;
}

export async function refresh() {
  const response = await fetcher('/auth/refresh');

  const json: FetchResponse = await response.json();

  if (!response.ok) {
    throw new Error('Failed to refresh token');
  }

  return json;
}
