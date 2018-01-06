const fs = require('fs')
const path = require('path')

/**
 * 检测文件或者文件夹是否存在
 * @param  {string} path 需要检测的文件或者文件夹路径
 * @return {boolean}     为 true 表示存在
 */
const obj = module.exports = {}
obj.isProduction = false
obj.existsSync = path => {
  try {
    fs.accessSync(path, fs.F_OK)
  } catch (e) {
    return false
  }
  return true
}

/**
 * 判断当前运行环境是否是生产环境
 * @param  {string} env webpack环境对象env
 * @return {boolean}     为 true 表示是生产环境
 */
obj.isProd = env => {
// 可能通过 webpack env参数或者环境变量来配置生产环境
  obj.isProduction = (function () {
    const production = env && env.production
    if (production === 'production' || production) {
      process.env.NODE_ENV = 'production'
      return true
    }
    if (process.env.NODE_ENV === 'production') {
      return true
    }
    return false
  })()
  return obj.isProduction
}

/**
 * 根据相对路径得到绝对路径
 * @param  {string} relativePath 相对路径
 * @return {string} 返回绝对路径
 */
const resolve = relativePath => {
  return path.join(__dirname, '..', relativePath)
}
obj.resolve = resolve

/**
 * 判断当前项目的类型(vue/react)
 * @return {string} vue or react
 */
obj.projType = () => {
  // 根据package.json 及 入口文件进行判断, 默认为vue项目
  try {
    const str = fs.readFileSync(resolve('package.json'), 'utf-8')
    if (str.indexOf('react') !== -1) {
      return 'react'
    }
    return 'vue'
  } catch (e) {
    // console.log(e)
    return 'vue'
  }
}
