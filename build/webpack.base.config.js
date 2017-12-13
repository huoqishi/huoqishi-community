const path = require('path')
const webpack = require('webpack')
// const loaders = require('./loaders.js')
const file = require('./fileInfo.js')
const base = {
  // module: {
  //   // rule: loaders
  // },
  resolve: {
    alias: {
      // 'vue$': 'vue/dist/vue.esm.js',
      '@': path.resolve(file.path, '../', 'src/')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  plugins: [
    // 全局挂载插件
    new webpack.ProvidePlugin({
      // $: 'jquery',
      // jQuery: 'jquery',
      // 'window.jQuery': 'jquery'
    }),
    new webpack.DefinePlugin({
      TVV: JSON.stringify('我是小明明')
    })
  ]
}
console.log(base.resolve.alias['@'])
module.exports = base
