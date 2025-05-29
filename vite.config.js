import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/ice-wrap-task/',
  plugins: [react()],
  // build: {
  //   lib: {
  //     entry: "./src/index.jsx",
  //     name: 'SachinDialogModal',
  //     fileName: (format) => `sachin-dialog-modal.${format}.js`,
  //   },
  //   rollupOptions: {
  //     external: ['react', 'react-dom'],
  //     output: {
  //       globals: {
  //         react: 'React',
  //         'react-dom': 'ReactDOM'
  //       }
  //     }
  //   }
  // },
  optimizeDeps: {
    include: ['sachin-dialog-modal']
  }
});
