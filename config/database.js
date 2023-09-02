require('dotenv').config()
const mongoose = require('mongoose')

mongoose.connect(process.env.MONGO_URI)
const db = mongoose.connection

db.on('connected', () => {
    console.log(`MONGO: ${db.name} ON AT ${db.host}`)
})

