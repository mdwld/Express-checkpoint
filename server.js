const express = require('express');
const app = express();
const fs = require('fs');
const v = require('./verif')
const PORT = 1851

app.get('/' , (req , res) => {
    fs.readFile('./home.html','utf8',(err,data) => {
        err?res.end('file not found')&&console.error(err):res.end(data);
    })
})

app.get('/home.html' , v,   (req , res) => {
    fs.readFile('./home.html', 'utf8' , (err,data) => {
        err?res.end('file not found')&&console.error(err):res.end(data);
    })
})

app.get('/service.html' , v,  (req , res) => {
    fs.readFile('./service.html','utf8' , (err,data) => {
        err?res.end('file not fond') && console.error (err) : res.end(data);
    })
})

app.get('/contact.html' , v, (req , res) => {
    fs.readFile('./contact.html','utf8',(err,data) => {
        err?res.end('file not found')&&console.error(err):res.end(data);
    })
})

app.listen(PORT,(error) => {
    error?console.log(error):console.log(`server is running on port ${PORT}`);
})