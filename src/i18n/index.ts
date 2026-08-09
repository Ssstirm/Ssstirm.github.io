import en from './en.json';
import zh from './zh.json';

export type Locale = 'en' | 'zh';

const dict = { en, zh } as const;

export function t(locale: Locale) {
  return dict[locale];
}

export function altLocale(locale: Locale): Locale {
  return locale === 'zh' ? 'en' : 'zh';
}

// Chinese is the default locale and lives at the root; English is prefixed.
export function localePath(locale: Locale, path = '/'): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return locale === 'zh' ? clean : `/en${clean === '/' ? '' : clean}`;
}
