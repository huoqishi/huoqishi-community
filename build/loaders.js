const os = require('os')
const path = require('path')
// const HappyPack = require('happypack')
// const ExtractTextPlugin = require('extract-text-webpack-plugin')

const file = require('./fileInfo.js')
// 获取绝对路径
function resolve (dir) {
  return path.join(__dirname, '..', dir)
}
//
// var cssLoader = ExtractTextPlugin.extract({
//   use: [
//     'happypack/loader?id=happy-css'
//   ]
// })

const loaders = [
  {
    test: /\.vue$/,
    loader: 'vue-loader', // loader not use
    exclude: /node_modules/,
    include: [resolve('src')],
    // options:
    options: {
      minimize: process.env.NODE_ENV === 'production',
      loaders: {
        // 'js': 'happypack/loader?id=happy-babel-vue',
        'scss': [
          'vue-style-loader',
          'css-loader',
          'sass-loader'
        ]
      }
      // other vue-loader options go here
    }
  },
  {
    test: /\.css$/,
    use: ['style-loader', 'css-loader']
  },
  // {
  //   test: /\.less$/,
  //   use: ['style-loader', 'css-loader', 'less-loader']
  // },
  {
    test: /\.scss$/,
    use: ['style-loader', 'css-loader', 'scss-loader']
  },
  {
    test: /\.js[x]?$/,
    exclude: /node_modules/,
    include: [resolve('src')],
    loader: ['babel-loader?cacheDirectory=true']
  },
  {
    test: /\.(png|jpe?g|gif|svg)(\?.*)?$/, // demo: .jpg?xxx
    loader: 'url-loader',
    options: {
      limit: 10000, // unit： bytes
      name: file.imgname
    }
  },
  {
    test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // demo: .mp3?xxx
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: file.medianame
    }
  },
  {
    test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // demo: test.eot?xxx
    loader: 'url-loader',
    options: {
      limit: 10000,
      name: file.fontsname
    }
  }
]
module.exports = loaders
