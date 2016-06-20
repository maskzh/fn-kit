var webpack = require('webpack')
module.exports = {
  entry: './src/index.js',
  output: {
    library: 'fnKit',
    libraryTarget: 'umd',
    filename: 'dist/fnKit.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel?sourceMap'
      }
    ]
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      }
    })
  ]
}
