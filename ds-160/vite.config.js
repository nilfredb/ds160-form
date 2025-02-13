// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite'; // Nombre correcto del plugin

export default defineConfig({
  plugins: [
    react(),
    tailwindcss()
  ],
});

