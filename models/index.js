const Personal = require('./Personal')
const Memo = require('./Memo')
const Setting = require('./Setting')
const Todo = require('./Todo')
const Blog = require('./Blog')
let sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('data/data.db', () => {
    console.log('数据库打开成功')
    db.run('CREATE TABLE IF NOT EXISTS personal (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, password VARCHAR, imgUrl VARCHAR, name VARCHAR,sex VARCHAR)');
    db.run('CREATE TABLE IF NOT EXISTS memo (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, content TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS app (id INTEGER PRIMARY KEY AUTOINCREMENT, appName VARCHAR, url VARCHAR, imgUrl VARCHAR, type VARCHAR)');
    db.run('CREATE TABLE IF NOT EXISTS setting (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, imgUrl VARCHAR, fontSize VARCHAR, fontColor VARCHAR, radius VARCHAR, uploadType VARCHAR, column VARCHAR, size VARCHAR)');
    db.run('CREATE TABLE IF NOT EXISTS todolist (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, state BOOLEAN, type VARCHAR, start VARCHAR, end VARCHAR, finish VARCHAR, grade VARCHAR, detail TEXT)');
    db.run('CREATE TABLE IF NOT EXISTS blog (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, src VARCHAR, time VARCHAR, type VARCHAR)');
})

let personal = new Personal(db)
let memo = new Memo(db)
let setting = new Setting(db)
let todo = new Todo(db)
let blog = new Blog(db)


module.exports = {
    personal,
    memo,
    setting,
    todo,
    blog
}