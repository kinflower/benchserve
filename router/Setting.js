function Setting({ router, db, url }) {
    router.post("/insertSetting", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.insert_setting(data)
            res.send(JSON.stringify({
                code: 200,
                message: "新增成功"
            }))
        })
    })
    router.get("/selectSetting", function (req, res) {
        let obj = url.parse(req.url, true).query
        db.select_setting().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val.filter(item => item.email == obj.email)
            }))
        })
    })
    router.post("/updateSetting", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.update_setting(data)
            res.send(JSON.stringify({
                code: 200,
                message: "修改成功"
            }))
        })
    })
    router.get("/selectApp", function (req, res) {
        db.select_app().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val
            }))
        })
    })
    router.post("/insertApp", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.insert_app(data)
            res.send(JSON.stringify({
                code: 200,
                message: "新增成功"
            }))
        })
    })
    router.post("/updateApp", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.update_app(data)
            res.send(JSON.stringify({
                code: 200,
                message: "修改成功"
            }))
        })
    })
    router.post("/removeApp", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.remove_app(data)
            res.send(JSON.stringify({
                code: 200,
                message: "删除成功"
            }))
        })
    })
}

module.exports = {
    Setting
}