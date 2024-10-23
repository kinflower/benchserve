const express = require('express')
const db = require('./models/index')
const url = require('url')
const router = express.Router()
const app = express()
const personal = require('./router/Personal')
const port = process.env.PORT || 4000;
const path = require('path')

// 网址可直接访问public下的资源
app.use(express.static(path.join(__dirname, 'public')))
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

personal.Personal({router, url, db: db.personal})

app.use(router)

app.listen(port, function () {
    console.log('http://127.0.0.1:4000')
})