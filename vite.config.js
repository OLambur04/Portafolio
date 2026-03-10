import { defineConfig } from 'vite'

export default defineConfig({
  base: '/Portafolio/',
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true
      }
    }
  },

  build: {
    minify: 'esbuild',
    outDir: 'dist',
    emptyOutDir: true
  }
})