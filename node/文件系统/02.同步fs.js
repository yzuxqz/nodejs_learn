let fs = require('fs')

let fd = fs.openSync('hello.txt','w')

fs.writeSync(fd,"今天天气真不错",20)
fs.closeSync(fd)
