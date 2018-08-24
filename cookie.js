const express = require('express')
const cookie = require('cookie-parser')
const app = express()
const port = 8000
const dir = __dirname

app.use(cookie())

app.get('/getCookie',(req,res) => {
    res.cookie('fortune-cookie','Mobile Pimrapas')
    res.end("Create Cookie")
})

app.get('/delCookie',(req,res) => {
    res.clearCookie('fortune-cookie')
    res.end("Already Delete Cookie")
})

app.listen(port)

console.log(`Server Complete @ Port ${port}`);