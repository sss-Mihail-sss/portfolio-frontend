import { type NextRequest } from 'next/server';
import { NextResponse } from 'next/server';
import createMiddleware from 'next-intl/middleware';

import { routing } from '@/config/i18n/routing';
import { refresh } from '@/lib/api/auth';

const withIntl = createMiddleware(routing);

const protectedRoutes = ['/dashboard'];

export async function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  if (!isProtectedRoute) {
    return withIntl(request);
  }

  const accessToken = request.cookies.get('accessToken');
  const refreshToken = request.cookies.get('refreshToken');

  // Если пользователь уже авторизован, то просто продолжаем
  if (accessToken?.value) {
    return withIntl(request);
  }

  // Если есть refreshToken, то обновляем токены и редиректим на ту же страницу
  // TODO: проверить return withIntl(request) вместо NextResponse.redirect(request.url)
  if (refreshToken?.value) {
    await refresh();
    return NextResponse.redirect(request.url);
  }

  return withIntl(request);

  // const loginUrl = new URL('/login', request.nextUrl);
  // loginUrl.searchParams.set('redirect', request.nextUrl.pathname);
  // return NextResponse.redirect(loginUrl);
}

export const config = {
  matcher: ['/((?!api|trpc|_next|_vercel|.*\\..*).*)'],
};
