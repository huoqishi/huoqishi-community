/**
 * 开发环境与生产环境公共的配置
 */
const webpack = require('webpack')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const HtmlPlugin = require('html-webpack-plugin')
const utils = require('./utils')
module.exports = {
  entry: {
    index: utils.resolve('src/index.js'),
    vender: ['vue']
  },
  output: {
    path: utils.resolve('./dist'),
    filename: '[name].js?[chunkhash]'
  },
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': utils.resolve('src')
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader', // loader not use
        exclude: /node_modules/,
        include: [utils.resolve('src')],
        options: {
          minimize: utils.isProduction,
          loaders: {
            'scss': [
              'vue-style-loader',
              'css-loader',
              'sass-loader'
            ]
          }
        }
      },
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // },
      // {
      //   test: /\.[(le)|(c)]ss$/,
      //   use: ['style-loader', 'css-loader', 'less-loader']
      // },
      {
        test: /\.[s]?css$/,
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: ['css-loader', 'sass-loader']
        })
      },
      {
        test: /\.js[x]?$/,
        exclude: /node_modules/,
        include: [utils.resolve('src')],
        loader: ['babel-loader?cacheDirectory=true']
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
          limit: 10000, // unit： bytes
          name: 'img/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/, // demo: .mp3?xxx
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'media/[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/, // demo: test.eot?xxx
        loader: 'url-loader',
        options: {
          limit: 10000,
          name: 'fonts/[name].[ext]?[hash]'
        }
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin('style.css'),
    new HtmlPlugin({
      template: utils.resolve('index.html')
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: ['vender', 'manifest']
    })
  ]
}
