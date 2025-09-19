/** biome-ignore-all lint/correctness/noNodejsModules lint/style/noProcessEnv: env config file */

import 'server-only';

import { envClient } from '@/config/env/client';
import { envSchemaServer } from '@/schemas/env';

export const envServer = envSchemaServer.parse({
  ...envClient,
});
