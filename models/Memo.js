class Memo {
    constructor(db) {
        this.db = db
    }
    insert_memo(param) {
        let add = this.db.prepare("INSERT OR REPLACE INTO memo (title, content) VALUES (?,?)");
        add.run(param.title, param.content)
        add.finalize()
        console.log('数据插入成功')
    }
    update_memo(param) {
        let update = this.db.prepare("UPDATE memo set title=?, content=? where id=?")
        update.run(param.title, param.content, param.id)
        update.finalize()
        console.log('数据更新成功')
    }
    select_memo() {
        return new Promise((resolve) => {
            this.db.all("SELECT * FROM memo", (err, row) => {
                resolve(row)
            })
        })
    }
    remove_memo(param) {
        let update = this.db.prepare(`DELETE FROM memo where id in (${param.map((_, i) => `?`).join(',')})`)
        update.run(param)
        update.finalize()
        console.log('数据删除成功')
    }
}

module.exports = Memo