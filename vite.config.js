import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',
  outDir: 'dist',
  esbuild: {
     jsxFactory: 'h',
     jsxFragment: 'Fragment',
   },

  build: {
      // other build options...
      rollupOptions: {
        output: {
          // Set the script type for JSX files
          manualChunks: { 'main.jsx': ['jsx'] },
        },
      },
    },
})
