import { defineConfig } from "rolldown-vite";

export default defineConfig({
  build: {
    rollupOptions: {
      treeshake: {
        commonjs: true
      },
      profilerNames: false
    },
    modulePreload: { polyfill: false }
  },
});
