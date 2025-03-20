import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import deepmerge from 'deepmerge';

import { defaultLocale, locales } from '@/i18n/routing';
import { getLanguage, getMessageFallback, onError } from '@/lib/intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  const language = getLanguage(locale);

  // TODO: Load messages from the server
  const defaultMessages = {
    ...(await import(`../../messages/${defaultLocale}/meta.json`)).default,
  };

  const messages = {
    ...(await import(`../../messages/${language}/meta.json`)).default,
  };

  return {
    locale,
    messages: deepmerge(defaultMessages, messages),
    timeZone: 'Europe/Chisinau',
    onError,
    getMessageFallback,
    formats: {
      dateTime: {
        'date-short': {
          day: '2-digit',
          month: '2-digit',
          year: 'numeric',
        },
      },
    },
  };
});
