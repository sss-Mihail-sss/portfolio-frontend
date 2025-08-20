import { type AbstractIntlMessages, type Formats, hasLocale, IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales } from '@/config/i18n/routing';
import { getLanguage } from '@/lib/utils/i18n';

export const formats: Formats = {
  dateTime: {
    'date-short': {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  },
};

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;
  const language = getLanguage(locale);

  const messages: AbstractIntlMessages = {
    ...(await import(`../../../messages/${language}/common.json`)).default,
    meta: (await import(`../../../messages/${language}/meta.json`)).default,
    form: (await import(`../../../messages/${language}/form.json`)).default,
    error: (await import(`../../../messages/${language}/error.json`)).default,
    navigation: (await import(`../../../messages/${language}/navigation.json`)).default,
    validation: (await import(`../../../messages/${language}/validation.json`)).default,
    unauthorized: (await import(`../../../messages/${language}/unauthorized.json`)).default,
  };

  return {
    locale,
    messages,
    formats,
    timeZone: 'Europe/Chisinau',
    onError(error) {
      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        // biome-ignore lint/suspicious/noConsole: Missing translations are expected and should only log an error
        console.error('Intl error', error);
      } else {
        throw error;
      }
    },
    getMessageFallback({ namespace, key, error }) {
      const path = [namespace, key].filter((part) => part != null).join('.');

      if (error.code === IntlErrorCode.MISSING_MESSAGE) {
        return `${path} is not yet translated`;
      }
      return `Dear developer, please fix this message: ${path}`;
    },
  };
});
