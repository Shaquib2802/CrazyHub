import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ['@mui/icons-material/WhatsApp'],
  },
  build: {
    rollupOptions: {
      external: ['react-slick'],
    },
  },
});

