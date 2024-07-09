const Sequelize = require('sequelize')

//conexao com o banco de dados sql
    const sequelize = new Sequelize('postapp','root', 'admin', {
        host: "localhost",
        dialect: 'mysql'
    })

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}