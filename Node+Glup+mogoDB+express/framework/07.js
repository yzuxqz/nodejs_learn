const express = require('express');
//创建网站服务器
const app = express();
//创建路由对象
const home = express.Router();
app.use('/home', home);
home.get('/index',(req,res)=>{
    res.send('欢迎来到首页')
})
//端口监听
app.listen(3000);