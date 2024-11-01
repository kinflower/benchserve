function Memo({ router, db, url }) {
    router.post("/insertMemo", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.insert_memo(data)
            res.send(JSON.stringify({
                code: 200,
                message: "保存成功"
            })) // 数据响应
        })
    })
    router.post("/updateMemo", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.update_memo(data)
            res.send(JSON.stringify({
                code: 200,
                message: "修改成功"
            })) // 数据响应
        })
    })
    router.get("/selectMemo", function (req, res) {
        db.select_memo().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val
            }))
        })
    })
    router.get("/searchMemo", function (req, res) {
        let obj = url.parse(req.url, true).query
        db.select_memo().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val.filter(item => item.title.includes(obj.title))
            }))
        })
    })
    router.post("/removeMemo", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.remove_memo(data)
            res.send(JSON.stringify({
                code: 200,
                message: "删除成功"
            })) // 数据响应
        })
    })
}

module.exports = {
    Memo
}