// 要做到自动识别当前项目是 Vue 还是 React
// 判断是生产环境, 还是开发环境
// 判断是vue项目, 还是react项目
const configDev = require('./webpack.dev')
const configProd = require('./webpack.prod')
const utils = require('./utils')
module.exports = (env, args) => {
  const isProduction = utils.isProd(env)
  const config = isProduction ? configProd : configDev
  return config()
}
