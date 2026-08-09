import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://ssstirm.github.io',
  integrations: [tailwind()],
  // Chinese moved from /zh/ to the root when it became the default locale.
  // Keep the old URLs alive so previously shared links don't 404.
  redirects: {
    '/zh': '/',
    '/zh/projects/[slug]': '/projects/[slug]',
  },
  i18n: {
    defaultLocale: 'zh',
    locales: ['zh', 'en'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
