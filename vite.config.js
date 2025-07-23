import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '~': path.resolve(__dirname, 'src'),
    },
  },
  css: {
    preprocessorOptions: {
      scss: {
        api: 'modern-compiler',
      },
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          three: ['three'],
          gltfLoader: ['three/examples/jsm/loaders/GLTFLoader.js'],
          dracoLoader: ['three/addons/loaders/DRACOLoader.js'],
        },
      },
    },
    chunkSizeWarningLimit: 550,
  },
  base: '/',
})
