import { NextRequest } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/lib/i18n/routing';
import { auth } from '@/lib/auth';

const withIntl = createMiddleware(routing);
const withAuth = auth((request) => withIntl(request));

export function middleware(request: NextRequest) {
  return withAuth(request, {});
}

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)'],
};
