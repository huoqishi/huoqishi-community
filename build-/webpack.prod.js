const webpack = require('webpack')
const ParallelUglifyPlugin = require('webpack-parallel-uglify-plugin')
const configBase = require('./webpack.base')
const merge = require('webpack-merge')
module.exports = () => {
  console.log('prod========-----------------')
  const configProd = {
    plugins: [
      // new ParallelUglifyPlugin({
      //   // cacheDir: '.cache/',
      //   uglifyJS: {
      //     output: {
      //       comments: false
      //     },
      //     compress: {
      //       warnings: false
      //     }
      //   }
      // })
      new webpack.optimize.UglifyJsPlugin({
        output: {
          comments: false
        },
        pure_funcs: ['console.log'], // 移除console.log
        compress: {
          warnings: false
        }
      })
    ]
  }
  const config = merge(configBase, configProd)
  console.log(config)
  return config
}
