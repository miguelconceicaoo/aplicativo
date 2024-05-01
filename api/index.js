const express = require('express'); // importando express
const app = express(); // const app recebendo a função express 
app.use(express.json()); // Criar middleware - permite receber os dados no corpo da requisição
const cors = require("cors"); // Importando cors, permite conexão externa

// Middleware para permitir requisição externa
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");   
    app.use(cors());
    next();
});

const users = require('./controllers/users'); //incluindo as controllers


// Rotas
app.use('/', users);

// Testar conexão com banco dados
// const db = require("./db/models");

//criando rota do tipo get direcionando para página inicial do site
app.get('/', function(req,res){
    //Retorno
    res.send('Página inicial do site');
});

//criando rota do tipo get direcionando para a página sobre empresa do site
app.get('/sobre-empresa', function(req,res){
    //Retorno
    res.send('Página sobre empresa do site');
});

//criando rota do tipo get direcionando para a página de contato do site
app.get('/contato', function(req,res){
    //Retorno
    res.send('Página de contato do site');
});

//const app escutando porta 8080 "iniciando servidor"
app.listen(8080, () => {
    console.log("Servidor rodando na porta 8080: http://localhost:8080");
})




