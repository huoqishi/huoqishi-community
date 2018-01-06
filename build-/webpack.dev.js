const merge = require('webpack-merge')
const configBase = require('./webpack.base')
module.exports = () => {
  const configDev = {
    devServer: {
      // historyApiFallback: true, // for h5 history api
      noInfo: true,
      overlay: true, // Used to display errors on the browser page when a compilation error occurs
      contentBase: configBase.output,
      port: 9980,
      open: true,
      host: '0.0.0.0'
    }
  }
  const config = merge(configBase, configDev)
  return config
}
