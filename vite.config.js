import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import WindiCSS from 'vite-plugin-windicss';

export default defineConfig({
  plugins: [WindiCSS(), react() ],
  base: '/portfolio/',
  outDir: 'dist',
  // Remove esbuild configuration
  // Remove unnecessary rollupOptions
});
