import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://dustin-hofmann/.github.io',
  base: '/rolfing', // in Produktion
  output: 'static',
  compressHTML: true,
  build: {
    // Optimierungen für schnelleres Laden
    format: 'file',
    assets: 'assets',
    inlineStylesheets: 'auto'
  },
  vite: {
    // Optimierungen für die Build-Performance
    build: {
      cssCodeSplit: true,
      minify: 'terser',
      terserOptions: {
        format: {
          comments: false
        }
      },
      rollupOptions: {
        output: {
          manualChunks: {
            bootstrap: ['bootstrap']
          }
        }
      }
    },
    // Reaktionsschnelleres Entwicklungserlebnis
    server: {
      watch: {
        usePolling: true
      }
    }
  }
});