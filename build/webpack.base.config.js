const path = require('path')
const os = require('os')
const webpack = require('webpack')
// const HappyPack = require('happypack')

// const loaders = require('./loaders.js')
const file = require('./fileInfo.js')
// const happyThreadPool = HappyPack.ThreadPool({ size: os.cpus().length })
// function createHappyPlugin (id, loaders) {
//   return new HappyPack({
//     id: id,
//     loaders: loaders,
//     threadPool: happyThreadPool
//     // make happy more verbose with HAPPY_VERBOSE=1
//     // verbose: process.env.HAPPY_VERBOSE === '1'
//   })
// }
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
  stats: 'normal', // 控制输出信息
  plugins: [
    // 全局挂载插件
    new webpack.ProvidePlugin({
      // $: 'jquery',
      // jQuery: 'jquery',
      // 'window.jQuery': 'jquery'
    }),
    // 替换代码插件
    new webpack.DefinePlugin({
      TVV: JSON.stringify('我是小明明')
    })
    // 多线程打包处理插件
    // createHappyPlugin('happybabel', ['babel-loader?cacheDirectory=true']),
    // createHappyPlugin('happy-babel-js', ['babel-loader?cacheDirectory=true'])
  ]
}
module.exports = base
