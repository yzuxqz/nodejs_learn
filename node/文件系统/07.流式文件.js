let fs = require('fs')
//可读流
let rs = fs.createReadStream('hello4.txt')
//可写流
let ws  =fs.createWriteStream('hello5.txt')
rs.once('open',function () {
    console.log('可读流打开')
})
rs.once('close',function () {
    console.log('可读流关闭')
    ws.close()
})
ws.once('open',function () {
    console.log('可写流打开')
})
ws.once('close',function () {
    console.log('可写流关闭')
})
//如果要读取可读流中的数据，必须绑定一个data事件，会自动读取数据
rs.on("data",function (data) {
    console.log(data)
    //将读取的数据写入可写流中
    ws.write(data)
    //数据写入完毕关闭可写流，在可读流关闭时关闭
})
