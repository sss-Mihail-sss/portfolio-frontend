import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

import { FileNames } from '@/config/i18n';

const withNextIntl = createNextIntlPlugin({
  experimental: {
    createMessagesDeclaration: FileNames
  },
  requestConfig: './src/i18n/request.ts'
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
