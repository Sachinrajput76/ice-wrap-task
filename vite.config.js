import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  // Set base path for GitHub Pages deployment
  base: '/ice-wrap-task/',
  plugins: [react()],

  build: {
    // Uncomment the following block to build as a library
    /*
    lib: {
      entry: './src/index.jsx',
      name: 'SachinDialogModal',
      fileName: (format) => `sachin-dialog-modal.${format}.js`,
    },
    rollupOptions: {
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
    */

    // This part is used for app deployment
    outDir: 'dist',
    emptyOutDir: true,
  },

  // Only needed if you're importing the library in a consumer app
  optimizeDeps: {
    include: ['sachin-dialog-modal'],
  },
});
