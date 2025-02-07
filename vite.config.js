import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'http://107.21.85.231:8292',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  build: {
    outDir: 'dist' // Ensure Vercel knows where to find the built files
  },
});
