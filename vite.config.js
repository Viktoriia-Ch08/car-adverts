import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  alias: {
    src: '/src',
    components: '/src/components',
    pages: '/src/pages',
    assets: '/src/assets',
  },
  base: 'car-adverts',
});
