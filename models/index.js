const Personal = require('./Personal')
const Memo = require('./Memo')
let sqlite = require('sqlite3').verbose()

const db = new sqlite.Database('data/data.db', () => {
    console.log('数据库打开成功')
    db.run('CREATE TABLE IF NOT EXISTS personal (id INTEGER PRIMARY KEY AUTOINCREMENT, email VARCHAR, password VARCHAR, imgUrl VARCHAR, name VARCHAR,sex VARCHAR)');
    db.run('CREATE TABLE IF NOT EXISTS memo (id INTEGER PRIMARY KEY AUTOINCREMENT, title VARCHAR, content TEXT)');
})

let personal = new Personal(db)
let memo = new Memo(db)

module.exports = {
    personal,
    memo
}