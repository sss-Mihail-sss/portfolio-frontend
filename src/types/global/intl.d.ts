import { defaultLocale, routing } from '@/i18n/routing';
import { formats } from '@/i18n/request';

const defaultMessages = {
  ...(await import(`../../messages/${defaultLocale}/meta.json`)).default,
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof defaultMessages;
    Formats: typeof formats;
  }
}
