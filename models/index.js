const Personal = require('./Personal')
let sqlite = require('sqlite3').verbose()

let personal = new Personal(sqlite)

module.exports = {
    personal
}