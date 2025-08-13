/** biome-ignore-all lint/correctness/noNodejsModules lint/style/noProcessEnv: env config file */

import { z } from 'zod';

import process from 'node:process';

const schema = z.object({
  apiUrl: z.url(),
  webUrl: z.url(),
  googlePlaceKey: z.string().optional(),
});

export const env = schema.parse({
  apiUrl: process.env.API_URL,
  webUrl: process.env.WEB_URL,
  googlePlaceKey: process.env.GOOGLE_PLACE_API_KEY,
});
