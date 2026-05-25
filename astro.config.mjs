// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://shinjirou11.github.io',
  base: '/kaidan-blog',
  integrations: [
    sitemap(),
  ],
});
