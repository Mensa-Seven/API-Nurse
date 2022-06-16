const express = require('express')
const cors = require('cors')
const auth = require('./router/auth.js')
const user = require('./router/user.js')


app = express()

app.use(cors('*'))
app.use(express.json())

app.use("/api/auth", auth)
app.use("/api/me/", user)

app.get('/test', (req, res) => {
    res.send({
        message:"Hello World"
    })
})
module.exports = app

