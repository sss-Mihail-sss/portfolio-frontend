import { createNavigation } from 'next-intl/navigation';
import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['en', 'ro', 'ru'],
  defaultLocale: 'en',
  localeDetection: true,
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',

    '/login': '/login',
    '/register': '/register',

    '/jobs': '/jobs',
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export const { Link, getPathname, redirect, usePathname, useRouter, permanentRedirect } = createNavigation(routing);
