import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: [
      './messages/en/common.json',
      './messages/en/error.json',
      './messages/en/form.json',
      './messages/en/meta.json',
      './messages/en/navigation.json',
      './messages/en/validation.json',
    ]
  },
  requestConfig: './src/config/i18n/request.ts'
});

const nextConfig: NextConfig = {
  experimental: {
    authInterrupts: true,
    typedEnv: true,
    taint: true,
    // ppr: 'incremental',
    useCache: true
  },
  devIndicators: {
    position: 'bottom-right'
  }
};

export default withNextIntl(nextConfig);
