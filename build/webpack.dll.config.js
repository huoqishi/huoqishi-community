const path = require('path')
const webpack = require('webpack')
const AssetsPlugin = require('assets-webpack-plugin')
const file = require('./fileInfo.js')

const config = {
  entry: {
    vender: file.vender
  },
  output: {
    path: file.path,
    filename: file.filename,
    library: file.library
  },
  plugins: [
    new webpack.DllPlugin({
      path: file.dll.path,
      // 暴露的对象名,需要和output.library保持一致。 这个是第三方包打包后的js文件中暴露的变量名
      name: file.dll.name,
      context: __dirname // 解析包的上下文路径， 需要和DllReferencePlugin 中的context 保持一致
    }),
    // save then chunk info
    new AssetsPlugin({
      path: file.path,
      filename: file.assets.filename
    })
  ]
}
module.exports = config
