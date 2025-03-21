import { Formats, IntlError, IntlErrorCode } from 'next-intl';

export function getLanguageName(locale: string, code: string): string | undefined {
  const Locale = new Intl.Locale(locale);
  return new Intl.DisplayNames([Locale], { type: 'language' }).of(code);
}

export function getLanguage(locale: string): string {
  return new Intl.Locale(locale).language;
}

export function onError(error: IntlError) {
  if (error.code === IntlErrorCode.MISSING_MESSAGE) {
    console.error('Intl error', error);
  } else {
    throw error;
  }
}

export function getMessageFallback({ key, error, namespace }: {
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

export const formats: Formats = {
  dateTime: {
    'date-short': {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    },
  },
};
