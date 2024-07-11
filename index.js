const express = require('express')
const app = express()
const handlebars = require('express-handlebars')
const bodyParser = require('body-parser')
const Post = require('./models/Post')
const port = 3000

//config
    //template engine
    app.engine('handlebars', handlebars.engine({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    //body parser
    app.use(bodyParser.urlencoded({extended: false}))
    app.use(bodyParser.json())

//Rotas
    app.get('/', function(req,res){
        res.render('home')
    })

    app.get('/cadastro', function(req, res){
       res.render('formulario') 
    })

    app.post('/adiciona', function(req, res){
        Post.create({
            titulo: req.body.titulo,
            conteudo: req.body.conteudo
        }).then(function(){
            res.redirect('/')
        }).catch(function(erro){
            res.send("Houve um erro: " + erro)
        })
    })

    
//escuta a porta 3000
app.listen(port, function(){
    console.log(`Servidor ativo na porta: ${port}`)
})