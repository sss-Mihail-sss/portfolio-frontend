import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: [
      './messages/en/meta.json',
    ],
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
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    API_URL: process.env.API_URL,
    WEB_URL: process.env.WEB_URL,
    CHAT_GPT_KEY: process.env.CHAT_GPT_KEY,
    GOOGLE_PLACE_API_KEY: process.env.GOOGLE_PLACE_API_KEY,
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
