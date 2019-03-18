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
  }
};
