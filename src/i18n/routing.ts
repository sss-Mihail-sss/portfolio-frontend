import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro', 'ru'],
  defaultLocale: 'en',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',

    '/about': '/about',
    '/contact': '/contact',

    '/login': '/login',
    '/register': '/register',
    '/forgot-password': '/forgot-password',

    '/dashboard': '/dashboard',

    '/user-management': '/user-management',
    '/user-management/users': '/user-management/users',
    '/user-management/roles': '/user-management/roles',
    '/user-management/permissions': '/user-management/permissions',
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
