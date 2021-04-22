const express = require('express')
const router = express.Router()

const transporter = require('./../config/nodemailer.config')

// Endpoints
router.get('/', (req, res) => res.render('pages/index'))

router.get('/contacto', (req, res) => res.render('pages/contact-page'))
router.post('/contacto', (req, res) => {

    const { name, email, msg } = req.body

    transporter
        .sendMail({
            from: "'Ironhack Módulo 2' <myawesome@project.com>",
            to: email,
            subject: 'Hey, ' + name + '! Estamos en clase de Express. Fuegote! 🔥',
            text: msg,
            html: `<b>${msg}</b>`
        })
        .then(info => res.send(info))
        .catch(error => console.log(error))


})


module.exports = router
