import { type AbstractIntlMessages, hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import deepmerge from 'deepmerge';

import { defaultLocale, locales } from '@/config/i18n/routing';
import { getLanguage, getMessageFallback, loadMessages, onError } from '@/lib/intl';
import { formats } from '@/config/i18n';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;
  const language = getLanguage(locale);
  const defaultLanguage = getLanguage(defaultLocale);

  let defaultMessages: AbstractIntlMessages = await loadMessages(defaultLanguage);
  let messages: AbstractIntlMessages = await loadMessages(language);

  return {
    locale,
    messages: deepmerge(defaultMessages, messages),
    timeZone: 'Europe/Chisinau',
    onError,
    getMessageFallback,
    formats
  };
});
