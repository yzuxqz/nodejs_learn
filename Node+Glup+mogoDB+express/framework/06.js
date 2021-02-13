const express = require('express');
const app = express();
const fs = require('fs');
const promisify = require('util').promisify;
const readFile = promisify(fs.readFile);


app.get('/index', async (req, res) => {
    try {
        await readFile('./aaa.js')
    } catch (ex) {
        next(ex);
    }

})

//错误处理中间件
app.use((err, req, res, next) => {
    res.status(500).send(err.message);
})

app.listen(3000);
console.log('网站服务器启动成功');