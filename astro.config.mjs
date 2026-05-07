import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Cuando exista el dominio propio (jrrodriguez.es), cambiar SITE a esa URL
// y poner BASE = '/'.
const SITE = 'https://opspilotcontact-lgtm.github.io';
const BASE = '/jr-rodriguez-ponencias';

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: 'ignore',
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
  build: {
    inlineStylesheets: 'auto',
  },
  compressHTML: true,
});
