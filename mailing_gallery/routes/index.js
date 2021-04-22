module.exports = app => {

    // Base URLS
    app.use('/', require('./base.routes.js'))
    app.use('/imagenes', require('./images.routes.js'))
}