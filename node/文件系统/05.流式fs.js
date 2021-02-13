let fs = require('fs')
let ws= fs.createWriteStream('hello3.txt')
//向文件中输出内容
ws.write("通过可写流写入文件内容")
ws.write("通过可写流写入文件内容")
ws.write("通过可写流写入文件内容")

ws.once('open',function () {
    console.log("流打开了")
})
ws.once('close',function () {
    console.log("流关闭了")
})
ws.end()
