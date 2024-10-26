const nodemailer = require('nodemailer');

let config = {
    port: {
        host: "smtp.163.com",
        port: 465,
        secure: true,
        auth: {
            user: '你的邮箱',
            pass: '鉴权码'
        }
    },
    mailOptions: {
        from: '你的邮箱',
        to: '',
        subject: 'Verification Code',
        text: ''
    }
}

function sendCodeToEmail(to, code) {
    config.mailOptions.to = to
    config.mailOptions.text = `Your verification code is: ${code}`
    return new Promise((resolve, reject) => {
        const transporter = nodemailer.createTransport(config.port);
        transporter.sendMail(config.mailOptions, (error, info) => {
            if(error) {
                reject(error)
            }else {
                resolve(info)
            }
        });
    })
}

module.exports = {sendCodeToEmail}