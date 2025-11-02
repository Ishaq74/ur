// i18n utilities for Astro
export const languages = {
  fr: { name: 'Français', dir: 'ltr' },
  en: { name: 'English', dir: 'ltr' },
  de: { name: 'Deutsch', dir: 'ltr' },
  es: { name: 'Español', dir: 'ltr' },
  ar: { name: 'العربية', dir: 'rtl' },
  zh: { name: '中文', dir: 'ltr' },
} as const;

export type Language = keyof typeof languages;

export const defaultLang: Language = 'fr';

// Import translations
import fr from './locales/fr.json';
import en from './locales/en.json';
import de from './locales/de.json';
import es from './locales/es.json';
import ar from './locales/ar.json';
import zh from './locales/zh.json';

const translations = {
  fr,
  en,
  de,
  es,
  ar,
  zh,
} as const;

export function getTranslation(lang: Language) {
  return translations[lang] || translations[defaultLang];
}

export function useTranslations(lang: Language = defaultLang) {
  const t = getTranslation(lang);

  return function translate(key: string, options?: Record<string, string | number>): string {
    const keys = key.split('.');
    let result: any = t;
    
    for (const k of keys) {
      if (result && typeof result === 'object' && k in result) {
        result = result[k];
      } else {
        return key; // Return the key if translation is not found
      }
    }
    
    if (typeof result === 'string' && options) {
      return Object.entries(options).reduce((acc, [optKey, optValue]) => {
        return acc.replace(`{{${optKey}}}`, String(optValue));
      }, result);
    }
    
    return typeof result === 'string' ? result : key;
  };
}

export function getLangFromUrl(url: URL): Language {
  const [, lang] = url.pathname.split('/');
  if (lang && lang in languages) {
    return lang as Language;
  }
  return defaultLang;
}

export function getLocalizedPath(path: string, lang: Language): string {
  // Remove existing language prefix if present
  const pathWithoutLang = Object.keys(languages).reduce((acc, l) => {
    const prefix = `/${l}/`;
    const prefixNoSlash = `/${l}`;
    if (acc.startsWith(prefix)) {
      return acc.substring(prefix.length - 1); // Keep the leading slash
    } else if (acc === prefixNoSlash) {
      return '/';
    }
    return acc;
  }, path);

  // Add new language prefix if not default language
  if (lang === defaultLang) {
    return pathWithoutLang;
  }
  return `/${lang}${pathWithoutLang}`;
}

// Find a localized entry (e.g., category) by its stable id and preferred language
// Falls back to default language, then any matching id.
export function findLocalizedById<T extends { data: { id: string; lang?: string } }>(
  entries: T[],
  id: string,
  lang: Language
): T | undefined {
  if (!id) return undefined;
  return (
    entries.find((e) => e.data.id === id && e.data.lang === lang) ||
    entries.find((e) => e.data.id === id && e.data.lang === defaultLang) ||
    entries.find((e) => e.data.id === id)
  );
}
