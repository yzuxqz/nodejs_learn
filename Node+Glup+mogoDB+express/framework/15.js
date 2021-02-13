const express = require('express');
const path = require('path');
const {
    listenerCount
} = require('process');
const app = express();
//告诉express框架使用寿命模板引擎渲染什么后缀文件
app.engine('art', require('express-art-template'));
//告诉express框架模板存放的位置
app.set('views', path.join(__dirname, 'views'));
//告诉express框架模板的默认后缀是什么
app.set('view engine', 'art');

//需要公用的数据
app.locals.users = [{
    name: 'zhangsan',
    age: 12
}, {
    name: '李四',
    age: 2
}]
app.get('/index', (req, res) => {
    //1.拼接了模板路径
    // 2.拼接了模板后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 4.响应给客户端
    res.render('index', {
        msg: '首页'
    })
})
app.get('/list', (req, res) => {
    //1.拼接了模板路径
    // 2.拼接了模板后缀
    // 3.哪一个模板和哪一个数据进行拼接
    // 4.响应给客户端
    res.render('index', {
        msg: '列表页'
    })
})
app.listen(300);