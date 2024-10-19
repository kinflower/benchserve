const { sendCodeToEmail } = require("../models/email")
const CryptoJS = require("crypto-js")

function Personal({router, db, url}) {
    let code = null
    router.post("/register", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            if(data.code == code) {
                db.insert_personal(data)
                res.send(JSON.stringify({
                    code: 200,
                    message: "注册成功",
                    token: CryptoJS.SHA256(data.email).toString(CryptoJS.enc.Hex)
                })) // 数据响应
            }else {
                res.send(JSON.stringify({
                    code: 400,
                    message: "验证码错误"
                })) // 数据响应
            }
            
        })
    })
    router.post("/sendCode", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            code = atob(data.code.slice(14))
            sendCodeToEmail(data.email, code)
            res.send(JSON.stringify({
                code: 200,
                message: '操作成功'
            })) // 数据响应
        })
    })
    router.post("/login", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            db.select_personal().then(val => {
                const flag = val.filter(item => item.email == data.email && item.password == data.password).length>0
                if(flag) {
                    res.send(JSON.stringify({
                        code: 200,
                        token: CryptoJS.SHA256(data.email).toString(CryptoJS.enc.Hex),
                        message: '登录成功'
                    }))
                }else {
                    res.send(JSON.stringify({
                        code: 400,
                        message: '账号或密码错误'
                    }))
                }
            })
        })
    })
    router.get("/checkAccount", function (req, res) {
        let obj = url.parse(req.url, true).query
        db.select_personal().then(val => {
            const flag = val.filter(item => item.email == obj.email).length>0
            if(flag) {
                res.send(JSON.stringify({
                    code: 400,
                    message: '当前账号已注册'
                }))
            }else {
                res.send(JSON.stringify({
                    code: 200,
                    message: '当前账号未注册'
                }))
            }
        })
    })
    router.post("/changePassword", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            if(data.code == code) {
                db.update_personal(data)
                res.send(JSON.stringify({
                    code: 200,
                    message: "密码修改成功"
                })) // 数据响应
            }else {
                res.send(JSON.stringify({
                    code: 400,
                    message: "验证码错误"
                })) // 数据响应
            }
        })
    })
}

module.exports = {
    Personal
}