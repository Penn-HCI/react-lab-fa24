import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/react-lab-fa24/', // Replace with your repository name
  plugins: [react()],
});
