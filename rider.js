const express = require('express')
const app = express()
const port = 8000

app.get('/',(req,res) => {
    res.send('<h1>Henshin</h1>')
})

app.listen(port)

console.log(`Server Connection Complete @ Port ${port}`)