module.exports = {
  entry: "./entry.js",
  output: {
    path: __dirname,
    filename: "bundle.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: "style-loader!css-loader" },
      { test: /\.less$/, loader: "style-loader!css-loader!less-loader" },
      { test: /\.(jsx)$/, loader: "babel-loader", exclude: /node_modules/ },
      { test: /\.(js)$/, loader: "babel-loader", exclude: /node_modules/ }
    ]
  }
}
