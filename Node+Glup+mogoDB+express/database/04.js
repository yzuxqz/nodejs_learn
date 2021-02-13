const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/playground', {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(() => {
        console.log('数据库连接成功');
    })
    .catch(() => {
        console.log('数据库连接失败');
    });
const userSchema = new mongoose.Schema({
    name: String,
    age: Number,
    email: String,
    password: String,
    hobbies: [String]
});
const User = mongoose.model('User', userSchema);
//查询用户集合中的所有文档
// User.find().then(result => console.log(result));
// User.find({_id:'5c09f1e5aeb04b22f8460965'}).then(result => console.log(result));
// User.findOne({ name: '李四' }).then(result => console.log(result)) ；
// User.find({
//     age: {
//         $gt: 20,
//         $lt: 40
//     }
// }).then((result) => {
//     console.log(result)
// })
// User.find({ hobbies: { $in: ['足球','篮球'] } }).then((result) => {
//     console.log(result);
// })
// User.find().select('name email -_id').then((result)=>{console.log(result);
// })
// User.find().sort('age').then((result) => {
//     console.log(result)
// });
// User.find().sort('-age').then((result) => {
//     console.log(result)
// });
// User.find().skip(2).limit(3).then((result) => {
//     console.log(result); 
// })



//删除文档
// User.findOneAndDelete({ _id: '5c09f267aeb04b22f8460968' }).then(result => console.log(result));
// User.deleteMany({ name:'张三'}).then(result => console.log(result));

//修改文档
// User.updateOne({ name: '李四' }, { name: '李狗蛋' }).then(result => { console.log(result) });
// User.updateMany({},{age:'56'}).then(result=>{console.log(result)})