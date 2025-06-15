import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '.',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
    rollupOptions: {
      input: { 
        main: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'pages/about.html'),
        komputer: resolve(__dirname, 'pages/kompüter-mühəndisliyi.html'),
        senaye: resolve(__dirname, 'pages/sənaye-mühəndisliyi.html'),
        qida: resolve(__dirname, 'pages/qida-mühəndisliyi.html'),
        shura: resolve(__dirname, 'pages/shura-uzvleri.html'),
        xeberler: resolve(__dirname, 'pages/xəbərlər.html'),
        xeberlerDaxili: resolve(__dirname, 'pages/xəbərlər-daxili.html'),
        elanlar: resolve(__dirname, 'pages/elanlar.html'),
        elanlarDaxili: resolve(__dirname, 'pages/elanlar-daxili.html'),
        hazirliq: resolve(__dirname, 'pages/hazırlıq.html'),
        academic: resolve(__dirname, 'pages/academic.html'),
        notFound: resolve(__dirname, 'pages/404.html'),
        search: resolve(__dirname, 'pages/search-result.html'),
        contact: resolve(__dirname, 'pages/contact.html'),
      }
    },
    // Optimize assets
    assetsDir: 'assets',
    // Generate source maps for debugging
    sourcemap: false,
    // Optimize chunks
    chunkSizeWarningLimit: 1000,
  },
  // Development server configuration
  server: {
    port: 3000,
    open: true,
    cors: true
  },
  // CSS preprocessing
  css: {
    devSourcemap: true
  },
  // Static assets handling
  publicDir: 'public',
  // Resolve aliases for cleaner imports
  resolve: {
    alias: {
      '@': resolve(__dirname, '.'),
      '@images': resolve(__dirname, 'images'),
      '@js': resolve(__dirname, 'js'),
      '@css': resolve(__dirname, 'output.css')
    }
  },
  define: {
    __APP_VERSION__: JSON.stringify(process.env.npm_package_version),
  }
})