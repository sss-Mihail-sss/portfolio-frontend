export function getLanguage(locale: string): string {
  return new Intl.Locale(locale).language;
}
