import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: '',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, '/index.html'),
        about: resolve(__dirname, '/pages/about.html'),
        kompüter: resolve(__dirname, '/pages/kompüter-mühəndisliyi.html'),
        sənaye: resolve(__dirname, '/pages/sənaye-mühəndisliyi.html'),
        qida: resolve(__dirname, '/pages/qida-mühəndisliyi.html'),
        shura: resolve(__dirname, '/pages/shura-uzvleri.html'),
        xəbərlər: resolve(__dirname, '/pages/xəbərlər.html'),
        xəbərlərDaxili: resolve(__dirname, '/pages/xəbərlər-daxili.html'),
        elanlar: resolve(__dirname, '/pages/elanlar.html'),
        elanlarDaxili: resolve(__dirname, '/pages/elanlar-daxili.html'),
        hazırlıq: resolve(__dirname, '/pages/hazırlıq.html'),
        academic: resolve(__dirname, '/pages/academic.html'),
        404: resolve(__dirname, '/pages/404.html'),
        search: resolve(__dirname, '/pages/search-result.html'),
        contact: resolve(__dirname, '/pages/contact.html'),
      }
    }
  }
})
