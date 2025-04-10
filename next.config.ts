import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: [
      './messages/en/common.json',
      './messages/en/meta.json',
      './messages/en/form.json',
      './messages/en/error.json',
      './messages/en/navigation.json',
      './messages/en/validation.json',
    ],
  },
  requestConfig: './src/i18n/request.ts',
});

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    typedEnv: true,
    taint: true,
    ppr: 'incremental',
    useCache: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
  env: {
    DOMAIN: process.env.DOMAIN,
    API_URL: process.env.API_URL,
    WEB_URL: process.env.WEB_URL,
    SESSION_SECRET: process.env.SESSION_SECRET,

    // AWS S3
    AWS_REGION: process.env.AWS_REGION,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,

    // ChatGPT KEY
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,

    // Google KEY
    GOOGLE_PLACE_API_KEY: process.env.GOOGLE_PLACE_API_KEY,

    // Blob KEY
    BLOB_READ_WRITE_TOKEN: process.env.BLOB_READ_WRITE_TOKEN,
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
