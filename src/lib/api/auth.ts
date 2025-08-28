import { fetcher } from '@/lib/fetcher';
import type { ForgotPasswordSchema } from '@/schemas/forgot-password';
import type { ForgotPasswordCodeSchema } from '@/schemas/forgot-password-code';
import type { SignInSchema } from '@/schemas/sign-in';
import type { SignUpSchema } from '@/schemas/sign-up';

export async function signIn(data: SignInSchema) {
  return await fetcher<'OK'>('/auth/login', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function signUp(data: SignUpSchema) {
  return await fetcher<'OK'>('/auth/register', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function requestOneTimeCode(data: ForgotPasswordSchema) {
  return await fetcher<'OK'>('/auth/request-otp', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function confirmOneTimeCode(data: ForgotPasswordCodeSchema) {
  return await fetcher<'OK'>('/auth/request-otp', {
    method: 'POST',
    body: JSON.stringify(data),
  });
}

export async function refresh() {
  return await fetcher<'OK'>('/auth/refresh');
}
