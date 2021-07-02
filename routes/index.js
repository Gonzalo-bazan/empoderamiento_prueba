const {Router}= require('express');
const express = require('express');
const router = express.Router();

//Controladores

const principalController = require('../controllers/principalController');
const anonimoController = require('../controllers/anonimoController');



module.exports=function(){
    //Home

    router.get('/',principalController.home);

    router.get('/productos',principalController.productos_home);

    router.get('/comentarios',principalController.comentarios_home);

    router.post('/comentarios',principalController.enviar_comentario);

    // router.get('/blog',principalController.blog_home);

    // router.get('/comentarios',principalController.)

    // CV ANONIMO

    router.get('/cv-anonimo',anonimoController.home_anonimo);

    router.get('/cv-anonimo/sobre-nosotros',anonimoController.nosotros_anonimo);

    router.get('/cv-anonimo/empleos',anonimoController.empleos_anonimo);

    router.get('/cv-anonimo/empresas',anonimoController.empresas_anonimo);

    router.get('/cv-anonimo/iniciar-sesion',anonimoController.iniciar_anonimo);

    router.get('/cv-anonimo/registrar',anonimoController.registrar_anonimo);

    return router;
}

