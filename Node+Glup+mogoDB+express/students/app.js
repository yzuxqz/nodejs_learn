//引入http模块
const http = require('http');
//引入path模块
const path = require('path');
//引入模板引擎
const template = require('art-template');
//引入静态资源访问模块
const serveStatic = require('serve-static');
//导入路由
const router = require('./route/index');
//引入处理日期的第三方模块
const dateformat = require('dateformat');

//实现静态资源访问服务 返回一个方法
const serve = serveStatic(path.join(__dirname, 'public'));

//配置模板根目录
template.defaults.root = path.join(__dirname, 'views');
//向模板中导入处理日期的方法
template.defaults.imports.dateformat = dateformat;

//导入数据库连接
require('./model/connect');

//创建网站服务器
const app = http.createServer();
//当客户端访问服务器端的时候
app.on('request', (req, res) => {
    router(req, res, () => {
        console.log('router被调用完成')
    });
    serve(req, res, () => {
        console.log('静态资源调用完成');
    })
});
//端口监听
app.listen(80);
console.log('服务器请求成功');