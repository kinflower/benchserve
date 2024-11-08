class Setting {
    constructor(db) {
        this.db = db
    }
    insert_setting(param) {
        let add = this.db.prepare("INSERT OR REPLACE INTO setting (email) VALUES (?)");
        add.run(param.email)
        add.finalize()
        console.log('数据插入成功')
    }
    update_setting(param) {
        let update = this.db.prepare("UPDATE setting set imgUrl=?, fontSize=?, fontColor=?, radius=? where id=?")
        update.run(param.imgUrl, param.fontSize, param.fontColor, param.radius, param.id)
        update.finalize()
        console.log('数据更新成功')
    }
    select_setting() {
        return new Promise((resolve) => {
            this.db.all("SELECT * FROM setting", (err, row) => {
                resolve(row)
            })
        })
    }
    select_app() {
        return new Promise((resolve) => {
            this.db.all("SELECT * FROM app", (err, row) => {
                resolve(row)
            })
        })
    }
    insert_app(param) {
        let add = this.db.prepare("INSERT OR REPLACE INTO app (appName, url, type, imgUrl, uploadType) VALUES (?,?,?,?,?)");
        add.run(param.appName, param.url, param.type, param.imgUrl, param.uploadType)
        add.finalize()
        console.log('数据插入成功')
    }
    update_app(param) {
        let update = this.db.prepare("UPDATE app set appName=?, url=?, type=?, imgUrl=?, uploadType=? where id=?")
        update.run(param.appName, param.url, param.type, param.imgUrl, param.uploadType, param.id)
        update.finalize()
        console.log('数据更新成功')
    }
    remove_app(param) {
        let update = this.db.prepare(`DELETE FROM app where id in (${param.map((_, i) => `?`).join(',')})`)
        update.run(param)
        update.finalize()
        console.log('数据删除成功')
    }
}

module.exports = Setting