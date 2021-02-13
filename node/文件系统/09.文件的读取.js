let fs = require('fs')
fs.readFile('hello3.txt',function (err,data) {
    if(!err){
        console.log(data.toString())
        //写入
        fs.writeFile('hello4.txt',data,function (err) {
            if(!err){
                console.log('文件写入成功')
            }

        })
    }else{
        console.log(err)
    }
})
