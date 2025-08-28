import { z } from 'zod/v4-mini';

export const forgotPasswordCodeSchema = z.object({
  code: z.string().check(z.length(6)),
});

export type ForgotPasswordCodeSchema = z.infer<typeof forgotPasswordCodeSchema>;
