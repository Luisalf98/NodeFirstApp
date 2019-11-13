const express = require('express')
const app = express()
const port = 3000

app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded
app.use(express.static('admin'))

app.get('/', (req, res) => res.redirect('/login'))
app.get('/login', (req, res) => res.sendFile(__dirname+'/admin/pages/examples/login.html'))
app.post('/login', (req, res, next)=>{ 
    console.log(req.body)
    console.log(req.params)
    res.redirect('/home')
})
app.get('/home',(req, res) => res.sendFile(__dirname+'/admin/index2.html'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))