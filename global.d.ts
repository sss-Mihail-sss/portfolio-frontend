import { formats, routing } from '@/config/i18n/routing';

const defaultMessages = {
  ...(await import('./messages/en/common.json')).default,
  meta: (await import('./messages/en/meta.json')).default,
  form: (await import('./messages/en/form.json')).default,
  error: (await import('./messages/en/error.json')).default,
  navigation: (await import('./messages/en/navigation.json')).default,
  validation: (await import('./messages/en/validation.json')).default,
};

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof defaultMessages;
    Formats: typeof formats;
  }
}
