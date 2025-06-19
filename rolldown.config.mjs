import { defineConfig } from "rolldown";
import { minify } from "rollup-plugin-swc3";

import path from "path";

export default defineConfig({
	input: {
		main: path.join(import.meta.dirname, "src", "index.js"),
	},
	define: {
		"process.env.NODE_ENV": JSON.stringify("production"),
	},
	resolve: {},
	// external: ["cookie"],
	plugins: [
		minify({
			module: true,
			// swc's minify option here
			mangle: {},
      format: {
        comments: false
      },
			compress: {
				passes: 2,
			},
		}),
	],
	profilerNames: false,
	output: {
		minify: false,
	},
});
