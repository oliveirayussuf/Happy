//importar dependência
const express = require('express');
const path = require('path');

//iniciando o express
const server = express()
server
//utilizando os arquivos estáticos
.use(express.static('public'))

//criar uma rota
server.get('/public/images/images/arrow.svg', (request, response) => {
    console.log(path.join(__dirname, 'views', 'index.html'))
    
})

//ligar o servidor
server.listen(5500)