const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000

app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('admin'))

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', (req, res) => res.sendFile(__dirname+'/pages/examples/login.html'))
app.post('/login', (req, res, next)=>{ 
    console.log(req)
    res.redirect('/home')
})
app.get('/home',(req, res) => res.sendFile(__dirname+'/pages/index2.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))