import { AbstractIntlMessages, hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';
import deepmerge from 'deepmerge';
import { join } from 'path';
import { readdirSync } from 'fs';

import { defaultLocale, locales } from '@/i18n/routing';
import { formats, getLanguage, getMessageFallback, onError } from '@/lib/intl';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(locales, requested) ? requested : defaultLocale;
  const language = getLanguage(locale);
  const files = readdirSync(join('messages', locale));

  files.forEach((file) => {
    console.log(file);
  });

  const defaultMessages: AbstractIntlMessages = {};

  for (const file of files) {
    const messages = (await import(`../../messages/${defaultLocale}/${file}`)).default;
    Object.assign(defaultMessages, ...messages);
  }

  const messages = {
    ...(await import(`../../messages/${language}/meta.json`)).default,
  };

  return {
    locale,
    messages: deepmerge(defaultMessages, messages),
    timeZone: 'Europe/Chisinau',
    onError,
    getMessageFallback,
    formats,
  };
});
