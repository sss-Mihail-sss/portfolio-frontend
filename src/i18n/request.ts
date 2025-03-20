import { hasLocale, IntlError, IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import deepmerge from 'deepmerge';

import { defaultLocale, locales } from '@/i18n/routing';
import { getLanguage } from '@/lib/intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;

  const language = getLanguage(locale);

  // TODO: Load messages from the server
  const defaultMessages = {
    ...(await import(`../../../messages/${defaultLocale}/meta.json`)).default,
  };

  const messages = {
    ...(await import(`../../../messages/${language}/meta.json`)).default,
  };

  function onError(error: IntlError) {
    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      console.error('Intl error', error);
    } else {
      throw error;
    }
  }

  function getMessageFallback({ key, error, namespace }: {
    error: IntlError;
    key: string;
    namespace?: string;
  }): string {
    const path = [namespace, key].filter((part) => part != null).join('.');
    console.error('Intl fallback', key, error, namespace);

    if (error.code === IntlErrorCode.MISSING_MESSAGE) {
      return path + ' is not yet translated';
    } else {
      return 'Dear developer, please fix this message: ' + path;
    }
  }

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
