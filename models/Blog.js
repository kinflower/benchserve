class Blog {
    constructor(db) {
        this.db = db
    }
    insert_blog(param) {
        let add = this.db.prepare("INSERT OR REPLACE INTO blog (title, src, time, type) VALUES (?,?,?,?)");
        add.run(param.title, param.src, param.time, param.type)
        add.finalize()
        console.log('数据插入成功')
    }
    update_blog(param) {
        let update = this.db.prepare("UPDATE blog set title=?, src=?, time=?, type=? where id=?")
        update.run(param.title, param.src, param.time, param.type, param.id)
        update.finalize()
        console.log('数据更新成功')
    }
    select_blog() {
        return new Promise((resolve) => {
            this.db.all("SELECT * FROM blog", (err, row) => {
                resolve(row)
            })
        })
    }
    remove_blog(param) {
        let update = this.db.prepare(`DELETE FROM blog where id in (${param.map((_, i) => `?`).join(',')})`)
        update.run(param)
        update.finalize()
        console.log('数据删除成功')
    }
}

module.exports = Blog