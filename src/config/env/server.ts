/** biome-ignore-all lint/correctness/noNodejsModules lint/style/noProcessEnv: env config file */

import 'server-only';

import { envSchemaServer } from '@/schemas/env';

export const envServer = envSchemaServer.parse({
  apiUrl: process.env.NEXT_PUBLIC_API_URL,
  webUrl: process.env.NEXT_PUBLIC_WEB_URL,
});
