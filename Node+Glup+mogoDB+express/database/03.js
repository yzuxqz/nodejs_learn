const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败', err));
//创建集合规则
const courseSchema = new mongoose.Schema({
    name: String,
    author: String,
    isPublished: Boolean
});
//使用规则创建集合
const Course = mongoose.model('Course', courseSchema);
//向集合中插入文档
Course.create({
    name: 'javascript',
    author: 'pink老师',
    isPublished: false
}, (err, result) => {
    console.log(err);
    console.log(result);
})