const express = require('express');

const app = express();

app.get('/index', (req, res) => {
    res.send(req.query);
})

//端口监听
app.listen(3000);