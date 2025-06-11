import { defineConfig } from "@rsbuild/core";

export default defineConfig({
  output: {
    distPath: {
      root: "./rsbuild-dist",
    },
  },
  performance: {
    chunkSplit: {
      strategy: "all-in-one",
    }
  }
});
