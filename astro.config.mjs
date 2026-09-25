// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://www.confeccionesnancy.cl',
  base: '/',
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
    build: {
      // scripts como el filtro del catalogo no deben quedar inline en el HTML:
      // una CSP script-src 'self' los bloquearia
      assetsInlineLimit: 0,
    },
  },
  integrations: [sitemap({ filter: (page) => !page.includes('/wsp') })],
});