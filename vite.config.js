import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  outDir: 'dist',
  // Remove esbuild configuration
  // Remove unnecessary rollupOptions
});
