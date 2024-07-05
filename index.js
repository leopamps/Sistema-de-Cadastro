const express = require("express")
const app = express()
const handlebars = require('express-handlebars')
const Sequelize = require('sequelize')

const port = 3000

//config
    //template engine
    app.engine('handlebars', handlebars({defaultLayout: 'main'}))
    app.set('view engine','handlebars')
    //conexao com o banco de dados sql
    const sequelize = new Sequelize('teste','root', 'admin', {
        host: "localhost",
        dialect: 'mysql'
    })

//Rotas
    app.get('/cad', function(req, res){
        res.send("Rota de cadastro")
    })

    

//escuta a porta 3000
app.listen(port, function(){
    console.log(`Servidor ativo na porta: ${port}`)
})