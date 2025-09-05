import { defineConfig } from 'vitest/config';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTest.js', // juste on utilise setupFiles
    coverage: {
      reporter: ['text', 'html'],
      exclude: ['node_modules/', 'vite.config.ts'],
    },
  },
});
