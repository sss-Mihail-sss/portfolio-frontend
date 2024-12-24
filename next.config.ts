import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: './messages/en.json',
  },
  requestConfig: './src/lib/i18n/request.ts',
});

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    reactCompiler: true,
    typedRoutes: true,
    typedEnv: true,
  },
};

export default withNextIntl(nextConfig);
