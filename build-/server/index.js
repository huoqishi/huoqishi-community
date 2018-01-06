// const path = require('path')
const express = require('express')
const fileInfo = require('../build/fileInfo.js')
const app = express()
app.use(express.static(fileInfo.path))
app.listen(8082, err => {
  if (err) return console.log('启动出错', err)
  console.log('ok,请访问 http://huoqishi.net')
})
