import { useMutation } from '@tanstack/react-query';

import { signIn } from '@/lib/api/auth';
import type { SignInSchema } from '@/schemas/sign-in';

export const useSignInMutation = () => {
  return useMutation({
    mutationFn: async (data: SignInSchema) => signIn(data),
  });
};
