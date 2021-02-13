let fs = require('fs')
fs.writeFile('hello3.txt', '这是通过writeFile写入的内容',{flag:'r'}, function (err) {
    if (!err) {
        console.log('写入成功')
    }
})
