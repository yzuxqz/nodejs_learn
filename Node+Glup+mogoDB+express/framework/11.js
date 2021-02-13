const express = require('express');

const app = express();

const bodyParser = require('body-parser');
//拦截所有的请求,用querystring模块进行处理
//会在req对象中添加body属性
app.use(fn({
    a: 2
}));

function fn(obj) {
    return function (req, res, next) {
        if (pbj.a == 1) {
            console.log(req.url);
        } else {
            console.log(req.method);
        }
        next();
    }
}
app.get('/', (req, res) => {
    res.send('ok');
})
//端口监听
app.listen(300);