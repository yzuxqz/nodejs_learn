const http = require('http');
const User = require('./model/user');
require('./model/index');
const url = require('url');
const querystring = require('querystring');


//创建服务器
const app = http.createServer();
//为服务器对象添加事件
app.on('request', async (req, res) => {
    //请求方式
    const method = req.method.toLowerCase();
    //解析请求参数
    const {
        pathname,
        query
    } = url.parse(req.url, true);
    //请求参数为get
    if (method == 'get') {
        //呈现用户列表页面
        if (pathname == '/list') {
            //查询用户信息
            let users = await User.find();
            //html字符串
            let list = `
            <!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h6>
                        <a href="/add" class="btn btn-primary">添加用户</a>
                    </h6>
                    <table class="table table-striped table-bordered">
                        <tr>
                            <td>用户名</td>
                            <td>年龄</td>
                            <td>爱好</td>
                            <td>邮箱</td>
                            <td>操作</td>
                        </tr>
                      `;

            //对数据进行循环操作
            users.forEach(item => {
                list += `<tr>
               <td>${item.name}</td>
               <td>${item.age}</td>
               <td>`;
                //再对每个数据里面的hobbies数组进行循环
                item.hobbies.forEach(item => {
                    list += `<span>${item}</span>`
                });
                list += ` </td>
            <td>${item.email}</td>
            <td>
                <a href="/remove?id=${item._id}" class="btn btn-danger btn-xs">删除</a>
                <a href="/modify?id=${item._id}" class="btn btn-success btn-xs">修改</a>
            </td>
        </tr>`
            });

            list += `</table>
            </div>
        </body>
        </html>`;
            res.end(list);
        }
        //添加用户界面
        else if (pathname == '/add') {
            let add = `<!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <title>用户列表</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
        </head>
        <body>
            <div class="container">
                <h3>添加用户</h3>
                <form method="post" action="/add">
                  <div class="form-group">
                    <label>用户名</label>
                    <input name="name" type="text" class="form-control" placeholder="请填写用户名">
                  </div>
                  <div class="form-group">
                    <label>密码</label>
                    <input name="password" type="password" class="form-control" placeholder="请输入密码">
                  </div>
                  <div class="form-group">
                    <label>年龄</label>
                    <input name="age" type="text" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>邮箱</label>
                    <input name="email" type="email" class="form-control" placeholder="请填写邮箱">
                  </div>
                  <div class="form-group">
                    <label>请选择爱好</label>
                    <div>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="足球"> 足球
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="篮球"> 篮球
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="橄榄球"> 橄榄球
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="敲代码"> 敲代码
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="抽烟"> 抽烟
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="喝酒"> 喝酒
                        </label>
                        <label class="checkbox-inline">
                          <input name="hobbies" type="checkbox" value="烫头"> 烫头
                        </label>
                    </div>
                  </div>
                  <button type="submit" class="btn btn-primary">添加用户</button>
                </form>
            </div>
        </body>
        </html>
`
            res.end(add);
        }
        //修改用户界面
        else if (pathname == '/modify') {
            let user = await User.findOne({
                _id: query.id
            });
            let hobbies = ['足球', '篮球', '橄榄球', '敲代码', '抽烟', '喝酒', '烫头']
            console.log(user);

            //呈现修改用户界面
            let modify = `<!DOCTYPE html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <title>用户列表</title>
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@3.3.7/dist/css/bootstrap.min.css">
            </head>
            <body>
                <div class="container">
                    <h3>修改用户</h3>
                    <form method="post" action="/modify?id=${user._id}">
                      <div class="form-group">
                        <label>用户名</label>
                        <input value="${user.name}" name="name" type="text" class="form-control" placeholder="请填写用户名">
                      </div>
                      <div class="form-group">
                        <label>密码</label>
                        <input value="${user.password}" name="password" type="password" class="form-control" placeholder="请输入密码">
                      </div>
                      <div class="form-group">
                        <label>年龄</label>
                        <input value="${user.age}" name="age" type="text" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>邮箱</label>
                        <input value="${user.email}" name="email" type="email" class="form-control" placeholder="请填写邮箱">
                      </div>
                      <div class="form-group">
                        <label>请选择爱好</label>
                        <div>

                           
                            
                       
    `;
            hobbies.forEach(item => {
                // 判断当前得循环项在不在用户得爱好数组中
                if (user.hobbies.includes(item)) {
                    modify += ` <label class="checkbox-inline">
<input name="hobbies" type="checkbox" value="${item}" checked> ${item}
</label>`
                } else {
                    modify += ` <label class="checkbox-inline">
                    <input name="hobbies" type="checkbox" value="${item}"> ${item}
                  </label>`
                }
            })
            modify += ` </div>
            </div>
            <button type="submit" class="btn btn-primary">修改用户</button>
          </form>
      </div>
  </body>
  </html>`
            res.end(modify);
        }
        //删除用户路由
        else if (pathname == '/remove') {
            await User.findOneAndDelete({
                _id: query.id
            });
            res.writeHead(301, {
                Location: '/list'
            });
            res.end();
        }
    }
    //请求参数为post
    else if (method == 'post') {
        //用户添加路由
        if (pathname == "/add") {
            //接收用户提交的信息
            let formData = '';
            //接收post参数
            req.on('data', param => {
                formData += param;
            });
            //post参数接收完毕
            req.on('end', async () => {
                let user = querystring.parse(formData);
                //将用户提交的信息添加到数据库中
                await User.create(user);
                //301代表重定向
                //location代表要跳转得地址
                res.writeHead(301, {
                    Location: '/list'
                });

                res.end();
            })

        }
        //用户修改路由
        else if (pathname == '/modify') {

            //接收用户提交的信息
            let formData = '';
            //接收post参数
            req.on('data', param => {
                formData += param;
            });
            //post参数接收完毕
            req.on('end', async () => {
                let user = querystring.parse(formData);
                //将用户提交的信息添加到数据库中
                await User.updateOne({
                    _id: query.id
                }, user);
                //301代表重定向
                //location代表要跳转得地址
                res.writeHead(301, {
                    Location: '/list'
                });

                res.end();
            })

        }
    }
})
//监听端口
app.listen(3000);