/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import path from 'path';
import typescript from '@rollup/plugin-typescript';

export default defineConfig({
  test: {
    globals: true,
    setupFiles: ['src/setup-tests.ts'],
  },
  build: {
    outDir: './dist',
    lib: {
      entry: path.resolve(__dirname, 'src/index.ts'),
      fileName: 'index',
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      plugins: [typescript()],
    },
  },
  resolve: {
    alias: {
      $lib: path.resolve(__dirname, 'src'),
      '$lib/*': path.resolve(__dirname, 'src/*'),
    },
  },
});
