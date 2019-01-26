const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')

const app = express()

//agregando la ruta del servidor
app.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = process.env.PORT || 8080
app.listen(port)

console.log('Listen on port: ' + port)