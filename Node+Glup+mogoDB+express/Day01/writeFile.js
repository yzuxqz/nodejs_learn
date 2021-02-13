const fs = require('fs');
fs.writeFile('./demo.txt', '即将要写入的内容', err => {
    if (err != null) {
        console.log(err);
        return;
    } else {
        console.log('文件写入成功');
    }
})