const express = require('express')
const db = require('./models/index')
const url = require('url')
const router = express.Router()
const app = express()
const personal = require('./router/Personal')
const port = process.env.PORT || 4000;

personal.Personal({router, url, db: db.personal})

app.use(router)

app.listen(port, function () {
    console.log('http://127.0.0.1:4000')
})