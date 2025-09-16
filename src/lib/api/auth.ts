import { post } from '@/lib/fetcher';
import { type ForgotPasswordSchema } from '@/schemas/forgot-password';
import { type ForgotPasswordCodeSchema } from '@/schemas/forgot-password-code';
import { type SignInSchema } from '@/schemas/sign-in';
import { type SignUpSchema } from '@/schemas/sign-up';

export async function signIn(data: SignInSchema) {
  return await post('/auth/login', data);
}

export async function signUp(data: SignUpSchema) {
  return await post('/auth/register', data);
}

export async function requestOneTimeCode(data: ForgotPasswordSchema) {
  return await post('/auth/request-otp', data);
}

export async function confirmOneTimeCode(data: ForgotPasswordCodeSchema) {
  return await post<{
    token: string;
    expiredAt: string;
  }>('/auth/validate-otp', data);
}

export async function refresh() {
  return await post('/auth/refresh');
}
