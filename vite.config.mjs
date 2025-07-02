import { defineConfig } from "rolldown-vite";

import { minify } from "rollup-plugin-swc3";
export default defineConfig({
  build: {
    rollupOptions: {
      treeshake: {
        commonjs: true
      },
      output: {
        minify: false
      },
      profilerNames: false
    }
  },
  plugins: [
    minify({
      module: true,
      // swc's minify option here
      mangle: {},
      format: {
        comments: false,
      }
    }),
  ],
});
