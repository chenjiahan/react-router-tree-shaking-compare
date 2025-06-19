import { defineConfig } from "vite";

import { minify } from "rollup-plugin-swc3";
export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    minify({
      module: true,
      // swc's minify option here
      mangle: {},
      format: {
        comments: false,
      },
      compress: {
        passes: 2,
      },
    }),
  ],
});
