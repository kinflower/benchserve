const express = require('express')
const db = require('./models/index')
const url = require('url')
const router = express.Router()
const app = express()
const personal = require('./router/Personal')
const memo = require('./router/Memo')
const port = process.env.PORT || 4000;
const path = require('path')

// 网址可直接访问public下的资源
app.use(express.static(path.join(__dirname, 'public')))

personal.Personal({router, url, db: db.personal})
memo.Memo({router, url, db: db.memo})

app.use(router)

app.listen(port, function () {
    console.log('http://127.0.0.1:4000')
})