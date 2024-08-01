import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import svgr from 'vite-plugin-svgr';
import { fileURLToPath, URL } from 'node:url';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), svgr()],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: fileURLToPath(new URL('./src', import.meta.url)),
      },
      {
        find: '@monorepo/common',
        replacement: fileURLToPath(new URL('../common', import.meta.url)),
      },
    ],
  },
  build: {
    outDir: '../../dist/common',
    emptyOutDir: true,
  },
})
