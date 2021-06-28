const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
//Variables
require('dotenv').config({path: 'variables.env'})

//Conexión a la BBDD

const db = require('./config/db');

//Modelos
require('./models/Comentarios');



db.sync()
    .then(()=>console.log('Conectado al servidor'))
    .catch(error=>console.log(error));

//Aplicación de Express

const app = express();

//Archivos estáticos

app.use(express.static('public'));

//pug

app.set('view engine','pug');

//Habilitar bodyParser para leer datos del formulario
app.use(bodyParser.urlencoded({extend: true}));

//Carpeta vistas

app.set('views',path.join(__dirname,'./views'));


//Rutas

app.use('/',routes());


//Puerto

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('El servidor esta funcionando')
});