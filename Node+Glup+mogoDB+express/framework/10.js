const express = require('express');

const app = express();

const bodyParser = require('body-parser');
//拦截所有的请求,用querystring模块进行处理
//会在req对象中添加body属性
app.use(bodyParser.urlencoded({
    extended: false
}));

app.post('/add', (req, res) => {
    res.send(req.body);
})
//端口监听
app.listen(3000);