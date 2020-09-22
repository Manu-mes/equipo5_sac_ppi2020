const express = require('express')
const app = express()

app.get ('/Ofilmax', function(req, res){
    res.send('Ofilmax');
})

app.listen(8080, function(){
    console.log("Bienvenidos a Ofilmax")
})