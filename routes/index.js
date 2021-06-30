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

    return router;
}

