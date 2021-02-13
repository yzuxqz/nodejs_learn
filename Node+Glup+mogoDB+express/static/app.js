const http = require('http');
const url = require('url');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const app = http.createServer();
app.on('request', (req, res) => {

    const method = req.method.toLowerCase();
    //获取请求路径
    let {
        pathname
    } = url.parse(req.url);
    pathname = pathname == '/' ? '/default.html' : pathname;
    //处理为实际的服务器硬盘路径
    let realpath = path.join(__dirname, 'public' + pathname);
    let type = mime.getType(realpath);
    //读取硬盘相应路径的文件并响应给客户端
    fs.readFile(realpath, (error, result) => {
        if (error != null) {
            res.writeHead(200, {
                'content-type': 'text/html;charset=utf8'
            });
            res.end('文件读取失败');
            return;
        };
        res.writeHead(200, {
            'content-type': type
        })
        res.end(result);
    })
    if (method == 'get') {

    } else if (method == 'post') {

    }
});
app.listen(3000);
console.log('服务器启动成功，端口号：3000');