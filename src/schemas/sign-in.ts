import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod/v4-mini';

export const passwordSchema = z.object({
  password: z
    .string()
    .check(z.trim(), z.minLength(8), z.maxLength(28), z.regex(/[a-zA-Z]/), z.regex(/[0-9]/), z.regex(/[^a-zA-Z0-9]/)),
});

export const signInUsernameSchema = z.object({
  type: z.literal('username'),
  username: z.string().check(z.trim(), z.minLength(2)),
});

export const signInPhoneSchema = z.object({
  type: z.literal('phone'),
  phone: z.string().check(z.refine((value) => isValidPhoneNumber(value), 'Invalid phone number')),
});

export const signInSchema = z.discriminatedUnion('type', [
  z.object({
    ...signInUsernameSchema.shape,
    ...passwordSchema.shape,
  }),
  z.object({
    ...signInPhoneSchema.shape,
    ...passwordSchema.shape,
  }),
]);

export type SignInSchema = z.infer<typeof signInSchema>;
