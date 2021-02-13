let fs = require('fs')
//可读流
let rs = fs.createReadStream('hello4.txt')
//可写流
let ws  =fs.createWriteStream('hello6.txt')
rs.once('open',function () {
    console.log('可读流打开')
})
rs.once('close',function () {
    console.log('可读流关闭')
})
ws.once('open',function () {
    console.log('可写流打开')
})
ws.once('close',function () {
    console.log('可写流关闭')
})
//pipe（）可以将可读流中的数据直接输出到可写流中
rs.pipe(ws)
