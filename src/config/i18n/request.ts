import { type AbstractIntlMessages, type Formats, hasLocale, IntlErrorCode } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { defaultLocale, locales } from '@/config/i18n/routing';
import { getLanguage } from '@/lib/utils/i18n';

const loadFile = async (language: string, filename: string): Promise<AbstractIntlMessages> => {
  try {
    return (await import(`../../../messages/${language}/${filename}`)).default;
  } catch (_) {
    return {};
  }
};

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
    ...(await loadFile(language, 'common.json')),
    meta: await loadFile(language, 'meta.json'),
    form: await loadFile(language, 'form.json'),
    error: await loadFile(language, 'error.json'),
    navigation: await loadFile(language, 'navigation.json'),
    validation: await loadFile(language, 'validation.json'),
    unauthorized: await loadFile(language, 'unauthorized.json'),
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
