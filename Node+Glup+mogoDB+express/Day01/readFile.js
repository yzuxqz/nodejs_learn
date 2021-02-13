//1.通过模块名字对模块进行引入
const fs = require('fs');
//2.读取文件内容,回调函数获取
fs.readFile('./a.js', 'utf8', (err, doc) => {
    if (err == null) {
        console.log(doc);
    } else {
        console.log(err);
    }
})