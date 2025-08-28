import { useMutation } from '@tanstack/react-query';

import { confirmOneTimeCode, requestOneTimeCode, signIn, signUp } from '@/lib/api/auth';
import type { ForgotPasswordSchema } from '@/schemas/forgot-password';
import type { ForgotPasswordCodeSchema } from '@/schemas/forgot-password-code';
import type { SignInSchema } from '@/schemas/sign-in';
import type { SignUpSchema } from '@/schemas/sign-up';

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: async (data: SignInSchema) => signIn(data),
  });
};

export const useSignUpMutation = () => {
  return useMutation({
    mutationFn: async (data: SignUpSchema) => signUp(data),
  });
};

export const useForgotPasswordMutation = () => {
  return useMutation({
    mutationFn: async (data: ForgotPasswordSchema) => requestOneTimeCode(data),
  });
};

export const useForgotPasswordConfirmCodeMutation = () => {
  return useMutation({
    mutationFn: async (data: ForgotPasswordCodeSchema) => confirmOneTimeCode(data),
  });
};
