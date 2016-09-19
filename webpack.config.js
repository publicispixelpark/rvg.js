module.exports = {

  entry: './src/elements.js',

  output: {
    filename: 'rvg.js'
  },

  module: {
    loaders: [
      {
        test: /\.js?/,
        exclude: 'node_modules',
        loader: 'babel'
      }
    ]
  }

}