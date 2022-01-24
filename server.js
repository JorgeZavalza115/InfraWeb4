// Casillas, González, Robles y Zavalza - Servicios Escolares
var express = require('express');
var bodyParser = require('body-parser');
// Instanciamos el objeto express
var app = express();
// Enviar parámetros por medio del formulario
app.use(bodyParser.urlencoded({extended:false}));

// Ruteo
app.get(
    '/',function(req, res){
        res.sendFile(__dirname + '/html/index.html');
    }
);

app.get(
    '/kardex',function(req, res){
        res.sendFile(__dirname + '/html/Kardex.html');
    }
);

app.post(
    '/login',function(req, res){
        var user_name = req.body.user;
        var password = req.body.password;
        console.log("El nombre de usuaio es: " + user_name + " password: " + password);
        res.end('Envio finalizado');
    }
);
app.listen(9000);
console.log("Server inicializado. SerEsc.");
