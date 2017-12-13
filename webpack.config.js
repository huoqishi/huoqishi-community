const webpack = require('webpack')
const configDll = require('./build/webpack.dll.config.js')
const configProd = require('./build/webpack.prod.config.js')
module.exports = (env, args) => {
  console.log(configProd.resolve)
  return env.production ? configProd : new Promise((resolve, reject) => {
    webpack(configDll, (err, stats) => {
      if (err) throw err
      // process.stdout.write(stats.toString({
      //   colors: true,
      //   modules: false,
      //   children: false,
      //   chunks: false,
      //   chunkModules: false
      // }) + '\n\n')
      if (stats.hasErrors()) {
        process.exit(1)
      }
      resolve(require('./build/webpack.dev.config.js'))
    })
  })
}
