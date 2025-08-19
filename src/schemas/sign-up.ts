import { z } from 'zod/v4-mini';

export const signUpSchema = z
  .object({
    username: z.string().check(z.trim(), z.minLength(2)),
    password: z
      .string()
      .check(z.trim(), z.minLength(8), z.maxLength(28), z.regex(/[a-zA-Z]/), z.regex(/[0-9]/), z.regex(/[^a-zA-Z0-9]/)),
    confirmPassword: z.string(),
  })
  .check(z.refine((values) => values.password === values.confirmPassword));

export type SignUpSchema = z.infer<typeof signUpSchema>;
