/** biome-ignore-all lint/correctness/noNodejsModules lint/style/noProcessEnv: env config file */

import { envSchemaClient } from '@/schemas/env';

export const envClient = envSchemaClient.parse({
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  webUrl: process.env.NEXT_PUBLIC_WEB_URL,
});
