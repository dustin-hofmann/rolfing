import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dustin-hofmann/.github.io',
  base: '/rolfing', // z.B. '/rolfing-website' (wenn das Ihr Repository-Name ist)
  output: 'static',
});