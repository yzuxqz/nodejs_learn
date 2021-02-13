//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

app.get('/', (req, res) => {
    //send()方法进行响应
    //自动检测响应类型，并写到响应头中
    //自动设置http状态码
    //自动设置响应的内容类型及编码
    res.send('Hello.express');
})

app.get('/list', (req, res) => {
    res.send({
        name: '张三',
        age: 20
    })
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');