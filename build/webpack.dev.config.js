const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const file = require('./fileInfo.js')
const base = require('./webpack.base.config')
const loaders = require('./loaders')
const venderConfig = require(path.resolve(file.path, file.assets.filename))
let config = {
  entry: {
    index: [file.index]
  },
  output: {
    path: file.path,
    filename: file.filename,
    chunkFilename: file.chunkFilename
  },
  module: {
    rules: loaders
  },
  // ...base, // 展开base对象中的属性, node 8.3.0 才开始支持对象的扩展运行符, 我还是先不用它了
  plugins: [
    // ...base.plugins, 取消注释报错
    // new webpack.optimize.UglifyJsPlugin(),
    // new webpack.optimize.CommonsChunkPlugin({
    //   name: ['vender', 'mainfest']
    // }),
    new webpack.DllReferencePlugin({
      context: __dirname,
      manifest: file.dll.path
    }),
    new HtmlWebpackPlugin({
      template: 'index.html',
      filename: 'index.html',
      // chunks: ['main'],
      venderName: venderConfig.vender.js //
    })
  ],
  devServer: {
    // historyApiFallback: true, // for h5 history api
    noInfo: true,
    overlay: true, // Used to display errors on the browser page when a compilation error occurs
    contentBase: file.path,
    port: 9980,
    open: true,
    host: '0.0.0.0',
    proxy: {
      '/api': {
        target: 'http://127.0.0.1:3000/',
        secure: false,
        pathRewrite: { '^/api': '' },
        changeOrigin: true
      }
    }
  }
  // performance: {
  //   hints: false // false or Object
  // }
}
config = Object.assign(base, config)
module.exports = config
