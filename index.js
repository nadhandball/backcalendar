

const express = require('express');
const { dbConnection } = require('./database/config');
require('dotenv').config();
const Port = 8080;

const app = express();
dbConnection();

app.use(express.static('public'));
app.use(express.json());
app.use('/api/auth', require('./Routes/auth'));




/*app.get ('/', (req, res) => {

    res.json({
        message:'Bienvenidos a nuestra API - Login'
    });
})

app.post ('/new', (req, res) => {

    res.json({
        message:'Creacion de un nuevo Usuario'
    });
})

app.post ('/renew', (req, res) => {

    res.json({
        message:'Renovamos tu permiso con este Token'
    });
}) */



app.listen(process.env.Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
})

/* app.listen(Port, () => {
    console.log(`Servidor corriendo en el puerto ${Port}`);
}) */