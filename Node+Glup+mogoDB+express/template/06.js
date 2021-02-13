const template = require('art-template');
const path = require('path');
const dateFormat = require('dateformat');

// const views = path.join(__dirname, 'views', '06.art');
//设置模板的根目录
template.defaults.root = path.join(__dirname, 'views')
//设置模板的默认后缀
template.defaults.extname = '.html';
//导入模板变量
template.defaults.imports.dateFormat = dateFormat;
const html = template('06.art', {
    time: new Date()
});

console.log(template('07', {
}));
 
console.log(html);