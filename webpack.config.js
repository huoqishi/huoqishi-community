const webpack = require('webpack')
const configDll = require('./build/webpack.dll.config.js')
module.exports = (env, args) => {
  if (env && env.production) {
    process.env.NODE_ENV = 'production'
  }
  const configPath = process.env.NODE_ENV === 'production'
    ? './build/webpack.prod.config.js'
    : './build/webpack.dev.config.js'
  console.log(configPath)
  const config = require(configPath)
  return process.env.NODE_ENV ? config : new Promise((resolve, reject) => {
    // resolve(require('./build/webpack.dev.config.js'))
    webpack(configDll, (err, stats) => {
      if (err) throw err
      if (stats.hasErrors()) {
        process.exit(1)
      }
      resolve(config)
    })
  })
}
