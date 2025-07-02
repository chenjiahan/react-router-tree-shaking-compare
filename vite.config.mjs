import { defineConfig } from "rolldown-vite";

import { minify } from "rollup-plugin-swc3";
export default defineConfig({
  build: {
    minify: true,
    rollupOptions: {
      treeshake: {
        commonjs: true
      }
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
