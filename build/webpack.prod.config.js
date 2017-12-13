const rm = require('rimraf')
const webpack = require('webpack')
const HtmlPlugin = require('html-webpack-plugin')
const base = require('./webpack.base.config')
const file = require('./fileInfo.js')
const loaders = require('./loaders.js')
let config = {
  entry: {
    main: [file.index],
    vender: file.vender
  },
  output: {
    path: file.path,
    // publicPath: file.publicPath,
    filename: file.filename
  },
  module: {
    rules: loaders
  },
  plugins: [
    ...base.plugins,
    new HtmlPlugin({
      template: 'index.html',
      filename: 'index.html'
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vender', 'manifest']
    })
  ]
}
rm.sync(file.path, {}, err => {
  if (err) {
    throw new Error(`清空 ${file.path} 失败`)
  }
})
config = Object.assign(base, config)
module.exports = config
