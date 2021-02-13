const express = require('express');
const app = express();
const path = require('path');


//静态资源访问
app.use(express.static(path.join(__dirname, 'public')));
//端口监听
app.listen(3000);
console.log('服务器启动成功');