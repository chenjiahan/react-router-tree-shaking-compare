import { defineConfig } from 'rolldown';
import path from 'path';

export default defineConfig({
  input: {
    main: path.join(import.meta.dirname, 'src', 'index.js'),
  },
  output: {
    minify: true,
  },
});
