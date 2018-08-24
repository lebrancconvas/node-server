const express = require('express')
const app = express()
const port = 8000

app.set('view engine','ejs')
app.get('/',(req,res) => {
    let data = {
        "name":"Himewa",
        "age":32,
        "job":"Warrior"
    }
    res.render('index',{char:data})
})
app.get('/content', (req, res) => {
    res.render('content')
})
app.get('/contact', (req, res) => {
    res.render('contact')
})

app.listen(port,() => {
    console.log(`Server Complete @ Port ${port}`)
})