//用于创建网站服务器的模块
const http = require('http');
//用于处理url地址
const url = require('url');
//app是网站服务器对象
const app = http.createServer();
//当客户端有请求时
app.on('request', (req, res) => {
    res.writeHead(200, {
        'content-type': 'text/html;charset=utf8'
    });
    console.log(req.url);
    console.log(url.parse(req.url,true).query);
    let {query,pathname } = url.parse(req.url, true);
    console.log(query.name);
    console.log(query.age);
    
    
    console.log('--------------------------------------------');
    
    //获取请求方式
    if (pathname == '/index' || pathname == '/') {
        res.end('<h2>3333欢迎</h2>')
    } else if (pathname == '/list') {
        res.end('欢迎来到列表页')
    } else {
        res.end('没有该页面')
    }
    //获取请求方式
    console.log(req.method);
    if (req.method == 'POST') {
        res.end('post')
    } else if (req.method == 'GET') {
        res.end('get');
        // console.log(req.url);
    }
    //获取请求报文信息
    // console.log(req.headers);
    console.log('-------------------------------');
    //获取具体报文里的具体信息
    // console.log(req.headers['accept']);




});
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');