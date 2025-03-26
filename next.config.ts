import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';
import { join } from 'path';
import { readdirSync } from 'fs';

import { defaultLocale } from '@/i18n/routing';

const path = join('messages', defaultLocale);
const files = readdirSync(path);

const messagesDeclaration = files.filter(file => file.endsWith('.json'))
  .map(file => './' + join('messages', defaultLocale, file));

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: messagesDeclaration,
  },
  requestConfig: './src/i18n/request.ts',
});

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    // reactCompiler: true,
    typedRoutes: true,
    // dynamicIO: true,
    typedEnv: true,
    taint: true,
    // ppr: 'incremental',
    viewTransition: true,
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    API_URL: process.env.API_URL,
    WEB_URL: process.env.WEB_URL,
    CHAT_GPT_KEY: process.env.CHAT_GPT_KEY,
    GOOGLE_PLACE_API_KEY: process.env.GOOGLE_PLACE_API_KEY,

    // AWS S3
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
  },
  images: {
    // GitHub Images
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
