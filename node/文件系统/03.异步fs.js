let fs = require('fs')

fs.open("hello2.txt", 'w', function (err, fd) {
    if (!err) {
        fs.write(fd, "这是异步回调的内容", function (err, written, string) {
            if (!err) {
                console.log('写入成功')
            }
            //关闭文件
            fs.close(fd,function (err) {
                if(!err){
                    console.log('文件已关闭')
                }
            })
        })
    } else {
        console.log(err)
    }
})
