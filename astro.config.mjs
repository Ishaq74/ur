import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  // Update with actual domain
  site: 'https://ur-ruddy.vercel.app',

  build: {
    inlineStylesheets: 'auto',
  },

  integrations: [sitemap()],

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
  },

  adapter: vercel()
});
