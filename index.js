const express = require('express')
const app = express()
const port = 3000

app.get("/", function(req, res){
    res.sendFile(__dirname+"/html/index.html")
})

app.get("/sobre", function(req, res){
    res.sendFile(__dirname+"/html/sobre.html")
})

app.get("/blog", function(req, res){
    res.send("Pagina blog")
})

app.get("/ola/:nome/:cargo", function(req, res){
    res.send(req.params)
})

//localhost:3000
app.listen(port, function(){
    console.log(`Servidor ativo na porta: ${port}`)
})