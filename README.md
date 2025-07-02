# react-router-tree-shaking-compare

This is a minimal example to compare the tree-shaking behavior of different build tools and bundlers.

## Source code

Take `react-router` as the input, which is a pure ESM package and has no side effects.

```js
import { BrowserRouter, Routes, Route } from "react-router";

console.log(BrowserRouter, Routes, Route);
```

## Output size

Use the default minimizer and build config of each tool.

| Build tool    | Minified size | Min+Gzipped size |
| ------------- | ------------- | ---------------- |
| Rspack        | 36.35 kB      | 13.26 kB         |
| Rsbuild       | 36.39 kB      | 13.29 kB         |
| webpack       | 36.96 kB      | 13.37 kB         |
| Rolldown Vite | 40.73 kB      | 14.60 kB         |
| Rolldown      | 40.76 kB      | 14.61 kB         |
| Vite          | 41.73 kB      | 15.27 kB         |
| Farm          | 43.42 kB      | 15.63 kB         |
| Parcel        | 44.62 kB      | 16.07 kB         |
| esbuild       | 46.12 kB      | 16.63 kB         |
| Bun           | 57.73 kB      | 20.8 kB          |

## Test locally

```bash
# Build with rspack
pnpm build:rspack
# Build with vite
pnpm build:vite
# ...
```
