import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
const path = require('path')
const toPath = (filePath: string) => path.join(process.cwd(), filePath)

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': toPath('src/')
    }
  }
})
