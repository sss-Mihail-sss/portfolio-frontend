import { NextRequest, NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/i18n/routing';
import { getCookie } from '@/lib/cookie';

const withIntl = createMiddleware(routing);

const protectedRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (isProtectedRoute) {
    const accessToken = await getCookie('accessToken');

    if (!accessToken?.value) {
      return NextResponse.redirect(new URL('/login', request.nextUrl));
    }
  }

  return withIntl(request);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
