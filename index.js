const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const flash = require('connect-flash');
const session = require('express-session');
const cookieParser = require('cookie-parser');
const passport = require('./config/passport');

//Conexión a la BBDD

const db = require('./config/db');

//Modelos
require('./models/Comentarios');
require('./models/UsuariosCV');



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

//Agregar flash messages

app.use(flash());

app.use(cookieParser());
//Sesiones nos permiten navegar entre distintas paginas sin volvernos a autenticar
app.use(session({
    secret:'supersecreto',
    resave:false,
    saveUninitialized:false
}));

app.use(passport.initialize());
app.use(passport.session());

// Pasar var dump a la aplicacion

app.use((req,res,next)=>{
    
    // res.locals.vardump=helpers.vardump;
    res.locals.mensajes=req.flash();
    res.locals.usuario = {...req.user} || null;
    
    next();
});

//Rutas

app.use('/',routes());

//Puerto

const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 3000;

app.listen(port,host,()=>{
    console.log('El servidor esta funcionando')
});