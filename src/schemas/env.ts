import { z } from 'zod';

const envSchemaClient = z.object({
  apiUrl: z.url(),
  webUrl: z.url(),
  googlePlaceKey: z.string().optional(),
});

const envSchemaServer = envSchemaClient.extend({});

export { envSchemaClient, envSchemaServer };
