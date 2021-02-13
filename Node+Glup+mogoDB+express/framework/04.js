//引入express框架
const express = require('express');
//创建网站服务器
const app = express();

//网站公告
// app.use((req, res, next) => {
//     res.send('当前网站正在维护')
// })

app.use('/admin', (req, res, next) => {
    //用户没有登陆
    let isLogin = true;
    //如果用户登陆
    if (isLogin) {
        //让请求继续
        next();
    } else {
        //如果没有登陆 直接做出响应
        res.send('您还没有登陆 不能访问/admin这个页面')
    }

})
app.get('/admin', (req, res) => {
    res.send('您已经登陆 可访问当前页面')
})
app.use((req, res ,next) => {
    res.status(404)
    .send('当前访问的页面不存在');
})
//监听端口
app.listen(3000);
console.log('网站服务器启动成功');