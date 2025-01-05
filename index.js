const express = require('express')
const db = require('./models/index')
const url = require('url')
const router = express.Router()
const app = express()
const personal = require('./router/Personal')
const memo = require('./router/Memo')
const setting = require('./router/Setting')
const todo = require('./router/Todo')
const blog = require('./router/blog')
const port = process.env.PORT || 4000;
const path = require('path')

// 网址可直接访问public下的资源
app.use(express.static(path.join(__dirname, 'public')))

personal.Personal({router, url, db: db.personal})
memo.Memo({router, url, db: db.memo})
setting.Setting({router, url, db: db.setting})
todo.Todo({router, url, db: db.todo})
blog.Blog({router, url, db: db.todo})
app.use(router)

app.listen(port, function () {
    console.log('http://127.0.0.1:4000')
})