var webpack = require('webpack');

module.exports = {
  entry:  "./src/index.js",
  output: {
    path: "./build",
    filename: "bundle.js"
  },

  module: {
    loaders: [{
      test: /\.json$/,
      loader: "json"
    }, {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel'
    }, ]
  },
}
