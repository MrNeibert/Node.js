const path = require ('path')

console.log(path.sep)

const filepath = path.join('/Node Test', 'testing','test.txt')
console.log(filepath)

const base = path.basename(filepath)
console.log(base)

const absolute = path.resolve(__dirname,'Node Test','testing','test.txt')
console.log(absolute)