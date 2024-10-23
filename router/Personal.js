const { sendCodeToEmail } = require("../models/email")
const CryptoJS = require("crypto-js")
const multer = require('multer')
const path = require('path')

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'public/') // 指定文件存储路径
    },
    filename: function (req, file, cb) {
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
        cb(null, uniqueSuffix + path.extname(file.originalname)) // 指定文件名
    }
});
const upload = multer({ storage: storage });

function Personal({ router, db, url }) {
    let code = null
    router.post("/register", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            if (data.code == code) {
                db.insert_personal(data)
                res.send(JSON.stringify({
                    code: 200,
                    message: "注册成功",
                    token: CryptoJS.SHA256(data.email).toString(CryptoJS.enc.Hex)
                })) // 数据响应
            } else {
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
                const flag = val.filter(item => item.email == data.email && item.password == data.password).length > 0
                if (flag) {
                    res.send(JSON.stringify({
                        code: 200,
                        token: CryptoJS.SHA256(data.email).toString(CryptoJS.enc.Hex),
                        message: '登录成功'
                    }))
                } else {
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
            const flag = val.filter(item => item.email == obj.email).length > 0
            if (flag) {
                res.send(JSON.stringify({
                    code: 400,
                    message: '当前账号已注册'
                }))
            } else {
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
            if (data.code == code) {
                db.update_personal(data)
                res.send(JSON.stringify({
                    code: 200,
                    message: "密码修改成功"
                })) // 数据响应
            } else {
                res.send(JSON.stringify({
                    code: 400,
                    message: "验证码错误"
                })) // 数据响应
            }
        })
    })
    router.get("/personalInfo", function (req, res) {
        let obj = url.parse(req.url, true).query
        let param = req.headers.authorization.split('+')
        if (param[0] != CryptoJS.SHA256(atob(param[1])).toString(CryptoJS.enc.Hex)) {
            res.send(JSON.stringify({
                code: 400,
                message: "登录异常"
            }))
            return
        }
        db.select_personal().then(val => {
            const detail = val.filter(item => item.email == atob(param[1]))
            if (detail.length > 0) {
                res.send(JSON.stringify({
                    code: 200,
                    message: detail[0]
                }))
            } else {
                res.send(JSON.stringify({
                    code: 400,
                    message: '账号不存在'
                }))
            }
        })
    })
    router.post("/upload", upload.single('image'), function (req, res) {
        if (!req.file) {
            return res.status(400).send(JSON.stringify({
                code: 400,
                message: '文件上传失败'
            }));
        }
        res.send(JSON.stringify({
            code: 200,
            message: '文件上传成功',
            file: `http://127.0.0.1:4000/${req.file.filename}`
        }));
    })
    router.post("/updateInfo", function (req, res) {
        let body = ''
        req.on('data', (thunk) => {
            body += thunk
        })
        req.on('end', () => {
            const data = JSON.parse(body)
            if(data.newPassword) {
                if (data.code == code) {
                    data.password = data.newPassword
                    db.update_info(data)
                    res.send(JSON.stringify({
                        code: 200,
                        message: "信息修改成功"
                    }))
                } else {
                    res.send(JSON.stringify({
                        code: 400,
                        message: "验证码错误"
                    }))
                }
            }else {
                db.update_info(data)
                res.send(JSON.stringify({
                    code: 200,
                    message: "信息修改成功"
                }))
            }
        })
    })
}

module.exports = {
    Personal
}