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
    '/forgot-password/phone': '/forgot-password/phone',

    '/dashboard': '/dashboard',

    '/jobs': '/jobs',
    '/jobs/category/[slug]': '/jobs/category/[slug]',

    '/user-management': '/user-management',
    '/user-management/users': '/user-management/users',
    '/user-management/roles': '/user-management/roles',
    '/user-management/permissions': '/user-management/permissions',

    '/terms-and-conditions': {
      ru: '/usloviya-i-polozheniya',
      ro: '/termeni-si-conditii',
      en: '/terms-and-conditions',
    },

    '/processing-of-personal-data': {
      ru: '/obrabotka-personalnykh-dannykh',
      ro: '/prelucrarea-datelor-cu-caracter-personal',
      en: '/processing-of-personal-data',
    },

    '/cookie-policy': {
      ru: '/politica-de-utilizare-cookie-uri',
      ro: '/politika-ispolzovaniya-faylov-cookie',
      en: '/cookie-policy',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;
