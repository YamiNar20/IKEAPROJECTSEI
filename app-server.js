const express = require('express')
const app = express()
const path = require('path')
const logger = require('morgan')


/* Middleware */
app.use(express.json())
app.use(express.static('public'))

app.use((req, res, next) => {
    res.locals.data = {}
    next()
})

<<<<<<< HEAD

=======
>>>>>>> fc035c7ad227405ed168c93f2942133cf617bda8
app.use(require('./config/checkToken'))
app.use('/api/users', require('./routes/users'))


app.get('*', (req, res) => {
    res.sendFile(path.resolve(path.join(__dirname, 'public', 'index.html')))
  })

module.exports = app