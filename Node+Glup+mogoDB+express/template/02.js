const template = require('art-template');
const path = require('path');
//1.模板的路径 绝对路径
//2.要在模板中显示数据 对象类型
//返回拼接好的字符串

const views = path.join(__dirname, 'views', '02.art');
const html = template(views, {
    name: '张三',
    age: 16,
    content:'<h1>我是标题</h1>'
})
console.log(html);