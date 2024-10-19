const nodemailer = require('nodemailer');

let config = {
    port: {
        host: "smtp.163.com",
        port: 465,
        secure: true,
        auth: {
            user: 'kinron1024@163.com',
            pass: ''
        }
    },
    mailOptions: {
        from: 'kinron1024@163.com',
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