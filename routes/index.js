const {Router}= require('express');
const express = require('express');
const router = express.Router();

//Controladores

const principalController = require('../controllers/principalController');
const anonimoController = require('../controllers/anonimoController');
const plataformaController = require('../controllers/plataformaInteractiva');
const authController = require('../controllers/authController');

const networkingController = require('../controllers/networkingController');



module.exports=function(){
    //Home

    router.get('/',principalController.home);

    router.get('/productos',principalController.productos_home);

    router.get('/comentarios',principalController.comentarios_home);

    router.post('/comentarios',principalController.enviar_comentario);

    // router.get('/blog',principalController.blog_home);

    // router.get('/comentarios',principalController.)

    //---------------- CV ANONIMO--------------------------------------

    router.get('/cv-anonimo',anonimoController.home_anonimo);

    router.get('/cv-anonimo/sobre-nosotros',anonimoController.nosotros_anonimo);

    router.get('/cv-anonimo/empleos',anonimoController.empleos_anonimo);

    router.get('/cv-anonimo/empresas',anonimoController.empresas_anonimo);

    router.get('/cv-anonimo/iniciar-sesion',anonimoController.iniciar_anonimo);

    router.get('/cv-anonimo/registrar',anonimoController.registrar_anonimo);

    //Registrar Usuario

    router.post('/cv-anonimo/registrar',anonimoController.crearUsuario);

    //Iniciar Sesion

    router.post('/cv-anonimo/iniciar-sesion',authController.autenticarUsuario);

    //Usuarios CV

    router.get('/cv-anonimo/usuarios',
    authController.usuarioAutenticado,
    anonimoController.usuarios_cv);

    //Cerrar Cesión

    router.get('/cv-anonimo/cerrar-sesion',authController.cerrarSesion);

    router.get('/cv-anonimo/usuarios-cv',anonimoController.mostrar_cv);

    //-----------------PLATAFORMA INTERACTIVA--------------------------//

    router.get('/plataforma-interactiva',plataformaController.home_plataforma);

    router.get('/plataforma-interactiva/preguntas',plataformaController.plataforma_preguntas);

     //-------------------NETWORKING--------------------------//

     router.get('/networking',networkingController.home_networking);

     router.get('/networking/nosotros',networkingController.nosotros_networking);

     router.get('/networking/eventos',networkingController.eventos_networking);

     router.get('/networking/eventos-gestion',networkingController.gestion_networking);

     router.get('/networking/formulario',networkingController.gestion_formulario);

    return router;

   

    
}

