/// <reference types="vitest" />
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
    },
  },
  plugins: [vue()],
  test: {
    exclude: ['node_modules', 'dist', '.idea', '.git', '.cache'],
  },
  server: {
    proxy: {
      '/api': 'http://localhost:8000',
    },
  },
})
