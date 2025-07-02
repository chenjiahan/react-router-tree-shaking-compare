import { defineConfig } from "rolldown";

import path from "path";

export default defineConfig({
  input: {
    main: path.join(import.meta.dirname, "src", "index.js"),
  },
  define: {
    "process.env.NODE_ENV": JSON.stringify("production"),
  },
  treeshake: {
    commonjs: true,
  },
  output: {
    minify: true,
  },
  profilerNames: false,
});
