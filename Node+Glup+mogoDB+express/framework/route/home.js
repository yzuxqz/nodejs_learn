const express = require('express');
const home = express.Router();
home.get('/index', (req, res) => {
    res.send('home首页');
});
module.exports = home;