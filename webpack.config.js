module.exports = {
  mode: "development",
  entry: "./js/index.js",
  output: {
    filename: "bundle.js"
  },
  node: {
    fs: "empty"
  },
  target: "web",
  watch: true,
  devServer: {
    contentBase: "./dist"
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,

        // vendor chunk
        vendor: {
          name: "vendor",
          // sync + async chunks
          chunks: "all",

          // import file path containing node_modules
          test: /node_modules/
        }
      }
    }
  }
};
