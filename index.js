const express = require('express')
let body = require('body-parser')
const app = express()
const port = 8000
const dir = __dirname

app.use(body())

app.get('/',(req,res) => {
    res.sendFile(`${dir}/index.html`)
})

app.post('/profile',(req,res) => {
    let data = {
        fname: req.body.fname,
        lname: req.body.lname
    }
    console.log(data)
    res.end(`My name is ${data.fname} ${data.lname}`)
})

app.listen(port)

console.log(`Server Complete @ Port ${port}`);