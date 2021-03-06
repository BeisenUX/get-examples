
const path = require('path')
const { readdirSync, lstatSync } = require('fs')

module.exports = function (cpath) {

  // 获取组件目录中定义的示例
  const epath = path.join(cpath, 'examples')

  return readdirSync(epath)
    .map(name => path.join(epath, name))
    // 过滤非文件夹路径
    .filter(source => lstatSync(epath).isDirectory())
    // 获取path路径最后一个文件夹名称
    .map(name => ({ 'name': name.split('\/')[name.split('\/').length - 1] }))
    // 去掉隐藏文件
    .filter(file => !file.name.match(/^\./))
}
