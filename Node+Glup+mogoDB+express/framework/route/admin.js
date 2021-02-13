const express = require('express');
const admin = express.Router();
admin.get('/index', (req, res) => {
    res.send('admin首页');
});
module.exports = admin;