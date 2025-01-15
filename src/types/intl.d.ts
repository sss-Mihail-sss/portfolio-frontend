import { routing } from '@/lib/i18n/routing';
import { formats } from '@/lib/i18n/request';

import en from './../../messages/en.json';
import ro from './../../messages/ro.json';
import ru from './../../messages/ru.json';

type MergeMessages<T1, T2, T3> = {
  [K in keyof T1 | keyof T2 | keyof T3]: K extends keyof T1
    ? K extends keyof T2
      ? K extends keyof T3
        ? T1[K] | T2[K] | T3[K]
        : T1[K] | T2[K] | undefined
      : K extends keyof T3
        ? T1[K] | T3[K] | undefined
        : T1[K] | undefined
    : K extends keyof T2
      ? K extends keyof T3
        ? T2[K] | T3[K] | undefined
        : T2[K] | undefined
      : K extends keyof T3
        ? T3[K] | undefined
        : undefined;
};

type MergedMessages = MergeMessages<typeof en, typeof ro, typeof ru>;

declare module 'next-intl' {
  interface AppConfig {
    Locale: (typeof routing.locales)[number];
    Messages: typeof en | typeof ro | typeof ru;
    Formats: typeof formats;
  }
}
