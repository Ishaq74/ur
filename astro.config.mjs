import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  output: 'static',
  build: {
    inlineStylesheets: 'auto',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr', 'en', 'de', 'es', 'ar', 'zh'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  vite: {
    define: {
      'process.env.API_KEY': JSON.stringify(process.env.GEMINI_API_KEY),
      'process.env.GEMINI_API_KEY': JSON.stringify(process.env.GEMINI_API_KEY)
    }
  }
});
