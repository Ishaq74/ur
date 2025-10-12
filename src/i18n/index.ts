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
  if (lang === defaultLang) {
    return path;
  }
  return `/${lang}${path}`;
}
