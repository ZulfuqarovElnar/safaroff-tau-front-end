import { defineConfig } from 'vite'
import { resolve } from 'path'

export default defineConfig({
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'src/index.html'),
        about: resolve(__dirname, 'src/pages/about.html'),
        kompüter: resolve(__dirname, 'src/pages/kompüter-mühəndisliyi.html'),
        sənaye: resolve(__dirname, 'src/pages/sənaye-mühəndisliyi.html'),
        qida: resolve(__dirname, 'src/pages/qida-mühəndisliyi.html'),
        shura: resolve(__dirname, 'src/pages/shura-uzvleri.html'),
        xəbərlər: resolve(__dirname, 'src/pages/xəbərlər.html'),
        xəbərlərDaxili: resolve(__dirname, 'src/pages/xəbərlər-daxili.html'),
        elanlar: resolve(__dirname, 'src/pages/elanlar.html'),
        elanlarDaxili: resolve(__dirname, 'src/pages/elanlar-daxili.html'),
        hazırlıq: resolve(__dirname, 'src/pages/hazırlıq.html'),
        academic: resolve(__dirname, 'src/pages/academic.html'),
        404: resolve(__dirname, 'src/pages/404.html'),
        search: resolve(__dirname, 'src/pages/search-result.html'),
        contact: resolve(__dirname, 'src/pages/contact.html'),
      }
    }
  }
})
