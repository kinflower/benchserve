const { paginateArray } = require('../common/util')

function Blog({ router, db, url }) {
    router.get("/selectAllPic", function (req, res) {
        db.select_blog().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val
            }))
        })
    })
    router.get("/selectPic", function (req, res) {
        let obj = url.parse(req.url, true).query
        db.select_blog().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: val.filter(item => item.type == obj.type)
            }))
        })
    })
    router.get("/selectPagePic", function (req, res) {
        let obj = url.parse(req.url, true).query
        db.select_blog().then(val => {
            res.send(JSON.stringify({
                code: 200,
                message: paginateArray(val, obj.current, obj.size),
                total: val.length
            }))
        })
    })
    router.post("/insertBlog", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.insert_blog(data)
            res.send(JSON.stringify({
                code: 200,
                message: "保存成功"
            }))
        })
    })
    router.post("/updateBlog", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.update_blog(data)
            res.send(JSON.stringify({
                code: 200,
                message: "修改成功"
            }))
        })
    })
    router.post("/removeBlog", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.remove_blog(data)
            res.send(JSON.stringify({
                code: 200,
                message: "删除成功"
            }))
        })
    })
}

module.exports = {
    Blog
}