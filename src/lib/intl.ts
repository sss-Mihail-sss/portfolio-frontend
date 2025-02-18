export function getLanguageName(locale: string, code: string): string | undefined {
  const Locale = new Intl.Locale(locale);
  return new Intl.DisplayNames([Locale], { type: 'language' }).of(code);
}
