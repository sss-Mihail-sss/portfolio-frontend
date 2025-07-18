import { z } from 'zod/v4-mini';

export const signInSchema = z.object({
  identifier: z.string().check(z.trim(), z.minLength(2)),
  password: z.string().check(
    z.trim(),
    z.minLength(8),
    z.regex(/[a-zA-Z]/),
    z.regex(/[0-9]/),
    z.regex(/[^a-zA-Z0-9]/)
  )
});

export type SignInSchema = z.infer<typeof signInSchema>;
