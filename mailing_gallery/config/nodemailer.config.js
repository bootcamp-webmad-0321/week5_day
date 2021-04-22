const nodemailer = require('nodemailer')

let transporter = nodemailer.createTransport({
    service: 'Gmail',
    auth: {
        user: 'gerbootcamp00@gmail.com',
        pass: 'tikitiki983'
    }
})

module.exports = transporter