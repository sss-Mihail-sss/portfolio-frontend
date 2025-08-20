import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod/v4-mini';

export const forgotPasswordEmailSchema = z.object({
  email: z.string().check(z.email()),
});

export const forgotPasswordPhoneSchema = z.object({
  phone: z.string().check(z.refine((value) => isValidPhoneNumber(value), 'Invalid phone number')),
});

export type ForgotPasswordEmailSchema = z.infer<typeof forgotPasswordEmailSchema>;
export type ForgotPasswordPhoneSchema = z.infer<typeof forgotPasswordPhoneSchema>;

export const forgotPasswordSchema = z.discriminatedUnion('type', [
  z.object({
    type: z.literal('email'),
    email: z.email(),
  }),
  z.object({
    type: z.literal('phone'),
    phone: z.string().check(z.refine((value) => isValidPhoneNumber(value), 'Invalid phone number')),
  }),
]);

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
