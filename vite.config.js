import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: "./src/index.jsx", // or your entry file
      name: 'SachinDialogModal',
      fileName: (format) => `sachin-dialog-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM'
        }
      }
    }
  }, optimizeDeps: {
    include: ['sachin-dialog-modal']
  }
})

