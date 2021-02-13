//用于创建网站服务器的模块
const http = require('http');
//app是网站服务器对象
const app = http.createServer();
//处理请求参数模块
const querystring = require('querystring');
//当客户端有请求时
app.on('request', (req, res) => {
    //post是通过事件的方式接受的
    //data 当请求参数传递触发
    //end  当参数传递完成触发end
    //因为post参数是无限大小的，所以不会一次传输完，需要定义一个变量来接收，最后把完整的给end事件输出
    let postParams = '';
    req.on('data', (params) => {
        postParams += params;
    });
    req.on('end', () => {
        let postParamsFinal = querystring.parse(postParams);
        console.log(postParamsFinal);
    })
    //客户端的每次传递都需要服务端的一个响应，不然客户端会等待
    res.end('ok');
});
app.listen(3000);
console.log('服务器已启动，监听3000端口，请访问localhost:3000');