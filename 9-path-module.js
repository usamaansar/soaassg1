const path = require('path')

console.log(path.sep)

const filePath = path.join('/content', 'subfolder', '//test.txt')//if we write or put slashes wrong it will be corrected automatically
console.log(filePath)

const base = path.basename(filePath)
console.log(base)

const absolute = path.resolve(__dirname, 'content', 'subfolder', 'test.txt')
console.log(absolute)
