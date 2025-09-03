import { isValidPhoneNumber } from 'libphonenumber-js';
import { z } from 'zod/v4-mini';

export const forgotPasswordEmailSchema = z.object({
  type: z.literal('email'),
  identifier: z.email(),
});

export const forgotPasswordPhoneSchema = z.object({
  type: z.literal('phone'),
  identifier: z.string().check(z.refine(isValidPhoneNumber, 'Invalid phone number')),
});

export const forgotPasswordSchema = z.discriminatedUnion('type', [
  forgotPasswordEmailSchema,
  forgotPasswordPhoneSchema,
]);

export const forgotPasswordCodeSchema = z.discriminatedUnion('type', [
  z.object({
    ...forgotPasswordEmailSchema.shape,
    code: z.string().check(z.length(6)),
  }),
  z.object({
    ...forgotPasswordPhoneSchema.shape,
    code: z.string().check(z.length(6)),
  }),
]);

export type ForgotPasswordSchema = z.infer<typeof forgotPasswordSchema>;
export type ForgotPasswordCodeSchema = z.infer<typeof forgotPasswordCodeSchema>;
