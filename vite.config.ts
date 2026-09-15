import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// Served from https://aaqil456.github.io/my-portfolio/
export default defineConfig({
  base: '/my-portfolio/',
  plugins: [react(), tailwindcss()],
});
