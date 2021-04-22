const express = require('express')
const router = express.Router()

const { localUpload, CDNupload } = require('./../config/file-upload.config')
const Picture = require('./../models/image.model')


router.get('/', (req, res) => {

    Picture
        .find()
        .then(allpictures => res.render('pages/images/gallery-page', { allpictures }))
        .catch(err => console.log(err))
})


router.get('/local', (req, res) => res.render('pages/images/upload-local-page'))
router.post('/local', localUpload.single('userImage'), (req, res) => {

    const { description } = req.body

    console.log('Objeto file de Multer:', req.file)

    Picture
        .create({ description, path: `/uploads/${req.file.filename}` })
        .then(() => res.redirect('/imagenes'))
        .catch(err => console.log(err))
})




router.get('/cdn', (req, res) => res.render('pages/images/upload-cdn-page'))
router.post('/cdn', CDNupload.single('userImage'), (req, res) => {

    const { description } = req.body
    const { path } = req.file

    Picture
        .create({ description, path })
        .then(() => res.redirect('/imagenes'))
        .catch(err => console.log(err))
})



module.exports = router