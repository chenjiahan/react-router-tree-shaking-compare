/**
 * @type {import('@rspack/core').Configuration}
 * */
export default {
  mode: "production",
  output: {
    clean: true,
  },
  optimization: {
    minimize: true,
    // moduleIds: "named"
  }
};
