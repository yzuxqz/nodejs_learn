const mongoose = require('mongoose');
//创建用户集合规则
const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
        minlength: 2,
        maxlength: 20
    },
    age: {
        type: Number,
        min: 18,
        max: 80
    },
    password: String,
    email: String,
    hobbies: [String]
})
//在数据库中创建集合
const User = mongoose.model('User', UserSchema);

module.exports = User;