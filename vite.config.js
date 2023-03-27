import legacy from '@vitejs/plugin-legacy';
import { resolve } from 'path';

export default {
  plugins: [
    legacy({
        targets: ["ie >= 11"], 
        additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
        polyfills: ["es.array.iterator"],
    }),
  ],
  esbuild: {
    jsxFactory: 'h',
    jsxFragment: 'Fragment'
  },
  resolve: {
    alias: [
      { find: '@core', replacement: resolve(__dirname, 'src/core')},
      { find: '@assets', replacement: resolve(__dirname, 'src/assets')},
      { find: '@components', replacement: resolve(__dirname, 'src/components')},
      { find: '@styles', replacement: resolve(__dirname, 'src/styles')},
      { find: '@store', replacement: resolve(__dirname, 'src/store')},
    ]
  }
}