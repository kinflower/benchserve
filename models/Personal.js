class Personal {
    constructor(db) {
        this.db = db
    }
    insert_personal(param) {
        let add = this.db.prepare("INSERT OR REPLACE INTO personal (email, password) VALUES (?,?)");
        add.run(param.email, param.password)
        add.finalize()
        console.log('数据插入成功')
    }
    update_personal(param) {
        let update = this.db.prepare("UPDATE personal set password=? where email=?")
        update.run(param.password, param.email)
        update.finalize()
        console.log('数据更新成功')
    }
    select_personal() {
        return new Promise((resolve) => {
            this.db.all("SELECT * FROM personal", (err, row) => {
                resolve(row)
            })
        })
    }
    update_info(param) {
        let update = this.db.prepare("UPDATE personal set password=?, name=?, sex=?, imgUrl=? where email=?")
        update.run(param.password, param.name, param.sex, param.imgUrl, param.email)
        update.finalize()
        console.log('数据更新成功')
    }
}

module.exports = Personal