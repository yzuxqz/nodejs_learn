const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(() => console.log('数据库连接失败'));
const postSchema = new mongoose.Schema({
    title: {
        type: String,
        required: [true, '请传入文章标题'],
        minlength: 2,
        maxlength: 5,
    },
    age: {
        type: Number,
        min: 18,
        max: 50
    },
    publishDate: {
        type: Date,
        default: Date.now
    },
    category: {
        type: String,
        enum: {
            values: ['html', 'css', 'javascript', 'node.js'],
            message: '分类名称要在一定的范围内才可以'
        }
    },
    author: {
        type: String,
        validate: {
            validator: (v) => {
                //返回布尔值
                //true 验证成功
                // false 验证失败
                return v && v.length > 4
            },
            //自定义错误信息
            message: '传入的值不符合验证规则'
        }
    }
});
const Post = mongoose.model('Post', postSchema);
Post.create({
        title: 'aaaaa',
        age: 21,
        category: 'java',
        author: 'bd'
    })
    .then(result => console.log(result))
    .catch(err => {
        console.log(err)

        //获取错误信息对象
        const errs = err.errors;
        for (var attr in errs) {
            console.log(err[attr]['message']);

        }
    })