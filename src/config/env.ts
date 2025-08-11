import { z } from 'zod';

const schema = z.object({
  apiUrl: z.url(),
  webUrl: z.url(),
});

export const env = schema.parse({
  apiUrl: process.env.API_URL,
  webUrl: process.env.WEB_URL,
});
