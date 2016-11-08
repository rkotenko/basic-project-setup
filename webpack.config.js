modules.exports = {
  entry: 'config/entry.js',
  output: {
    path: 'dist',
    filename: "app.js"
  },
  module: {
    loaders: [
      { test: /\.css$/, loader: 'style!css'},
      {test: }
    ]
  }
};