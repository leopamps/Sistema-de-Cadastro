const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('Post')
const port = 3000

//config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    //body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/cadastro', function(req, res){
       res.render('formulario') 
    })

    app.post('/adiciona', function(req, res){
        res.send("Texto: "+req.body.titulo+"Conteudo: "+req.body.conteudo)
    })

    
//escuta a porta 3000
app.listen(port, function(){
    console.log(`Servidor ativo na porta: ${port}`)
})