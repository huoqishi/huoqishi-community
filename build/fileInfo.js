const path = require('path')
const outPath = path.resolve(__dirname, '../dist')
const dllNameAndLibrary = '[name]_[chunkhash]'
const fileInfo = {
  index: path.resolve(__dirname, '../src/index.js'),
  path: outPath,
  // Cannot use [chunkhash] for chunk in '[name].js?[chunkhash]' (use [hash] instead)
  filename: '[name].js?[hash:8]',
  publicPath: '/',
  library: dllNameAndLibrary,
  chunkFilename: '[name]_[chunkhash].js',
  fontsname: 'fonts/[name].[hash].[ext]',
  medianame: 'media/[name].[hash].[ext]',
  imgname: 'img/[name].[hash].[ext]',
  vender: [
    'vue',
    'vue-router',
    'vuex',
    'axios'
  ],
  // html-webpack-plugin
  html: {
    template: path.resolve(__dirname, '../index.html'), // template
    filename: 'index.html'
  },
  // dllPlugin
  dll: {
    path: path.resolve(outPath, 'manifest.json'),
    // need to be consistent with the value of 'fileInfo.library'
    name: dllNameAndLibrary
  },
  // assets-webpack.plugin
  assets: {
    filename: 'vender-config.json'
  }
}
module.exports = fileInfo
