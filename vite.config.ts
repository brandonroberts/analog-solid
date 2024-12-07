import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import nitro from '@analogjs/vite-plugin-nitro';

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true
    }),
    nitro({
      ssr: true,
      entryServer: 'src/main.server.tsx'
    }, {
      output: {
        dir: '.output',
        publicDir: '.output/public'
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    outDir: 'dist/client',
    target: 'esnext',
  },
});
