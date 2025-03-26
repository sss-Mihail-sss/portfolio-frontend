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

    '/dashboard/storage': '/dashboard/storage',
    '/dashboard/storage/folders': '/dashboard/storage/folders',
    '/dashboard/storage/folders/[[...path]]': '/dashboard/storage/folders/[[...path]]',
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
