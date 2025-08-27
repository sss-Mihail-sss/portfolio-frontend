import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod/v4-mini';

export const forgotPasswordEmailSchema = z.object({
  type: z.literal('email'),
  email: z.string().check(z.email()),
});

export const forgotPasswordPhoneSchema = z.object({
  type: z.literal('phone'),
  phone: z.string().check(z.refine((value) => isValidPhoneNumber(value), 'Invalid phone number')),
});

export const forgotPasswordSchema = z.discriminatedUnion('type', [
  forgotPasswordEmailSchema,
  forgotPasswordPhoneSchema,
]);

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
