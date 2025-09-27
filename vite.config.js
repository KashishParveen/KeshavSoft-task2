// vite.config.js
import { defineConfig } from 'vite';
export default defineConfig({
  // 🚨 ADD THIS LINE 🚨
  base: '/KeshavSoft-task2/', 
  // --------------------
  root: 'src',
  build: {
    outDir: '../dist',
    emptyOutDir: false
}
});
