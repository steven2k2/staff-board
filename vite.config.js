import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: '/staff-board/', // Add this line to set the base path
  build: {
    outDir: 'dist', // This ensures the output directory remains consistent
  },
});