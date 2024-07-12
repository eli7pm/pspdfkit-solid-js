import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import copy from "rollup-plugin-copy";
// import devtools from 'solid-devtools/vite';

export default defineConfig({
  plugins: [
    /*
    Uncomment the following line to enable solid-devtools.
    For more info see https://github.com/thetarnav/solid-devtools/tree/main/packages/extension#readme
    */
    // devtools(),
    copy({
      targets: [
        {
          src: "node_modules/pspdfkit/dist/pspdfkit-lib",
          dest: "public",
        },
      ],
      hook: "buildStart",
    }),
    solidPlugin(),
  ],
  server: {
    port: 3000,
  },
  build: {
    target: 'esnext',
  },
});
