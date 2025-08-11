import deepmerge from 'deepmerge';
import type { AbstractIntlMessages } from 'next-intl';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

import { formats } from '@/config/i18n';
import { defaultLocale, locales } from '@/config/i18n/routing';
import { getLanguage, getMessageFallback, loadMessages, onError } from '@/lib/intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;
  const language = getLanguage(locale);
  const defaultLanguage = getLanguage(defaultLocale);

  const defaultMessages: AbstractIntlMessages = await loadMessages(defaultLanguage);
  const messages: AbstractIntlMessages = await loadMessages(language);

  return {
    locale,
    messages: deepmerge(defaultMessages, messages),
    timeZone: 'Europe/Chisinau',
    onError,
    getMessageFallback,
    formats,
  };
});
