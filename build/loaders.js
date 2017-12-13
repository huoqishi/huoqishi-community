const file = require('./fileInfo.js')
const loaders = [
  {
    test: /\.vue$/,
    loader: 'vue-loader', // loader not use
    options: {
      loaders: {
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
    test: /\.js/,
    use: ['babel-loader'],
    exclude: /node_modules/
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
