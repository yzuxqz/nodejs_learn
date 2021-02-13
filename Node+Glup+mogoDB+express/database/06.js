const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => console.log('数据库连接成功'))
    .catch(err => console.log(err, '数据库连接失败'));

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
});

const postSchema = new mongoose.Schema({
    title: {
        type: String
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
});

const User = mongoose.model('User', userSchema);
const Post = mongoose.model('Post', postSchema);

//创建用户
// User.create({
//         name: '许钱洲'
//     })
//     .then(result => console.log(result))

//创建文章
// Post.create({
//     title: '第一篇文章',
//     author: '5edc9d6d93b196320412da2a'
// })
//     .then(result=>console.log(result))
Post.find().populate('author').then(result=>console.log(result))