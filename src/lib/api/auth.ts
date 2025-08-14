import { fetcher } from '@/lib/fetcher';
import type { SignInSchema } from '@/schemas/sign-in';

export async function signIn(data: SignInSchema) {
  return await fetcher<'OK'>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function refresh() {
  return await fetcher<'OK'>('/auth/refresh');
}
