import { defineConfig } from 'vite';
import solid from 'vite-plugin-solid';
import nitro from '@analogjs/vite-plugin-nitro';
import { devServerPlugin } from './dev-server-plugin';
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  root: '.',
  plugins: [
    /* 
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    solid({
      ssr: true,
    }),
    devServerPlugin({
      entryServer: 'src/main.server.tsx'
    }),
    nitro({
      ssr: true,
      entryServer: 'src/main.server.tsx',
      prerender: {
        routes: ['/', '/hello']
      }
    })
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
    outDir: 'dist/client'
  },
});
