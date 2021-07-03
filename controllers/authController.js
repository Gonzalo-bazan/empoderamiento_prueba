const passport = require('passport');


exports.autenticarUsuario= passport.authenticate('local',{
    successRedirect: '/cv-anonimo/usuarios',
    failureRedirect: '/cv-anonimo/iniciar-sesion',
    failureFlash: true,
    badRequestMessage: 'Ambos campos son obligatorios'
});

//Funcion para revisar si el usuario esta logueado o no

exports.usuarioAutenticado = (req,res,next)=>{
    //Si el usuario está autenticado, adelante

    if(req.isAuthenticated()){
        return next();
    }

    //Sino está autenticado, redigir al formulario  

    return res.redirect('/cv-anonimo/iniciar-sesion');
}

//funcion para cerrar sesion

exports.cerrarSesion=(req,res)=>{
    req.session.destroy(()=>{
        res.redirect('/cv-anonimo/iniciar-sesion'); //Al cerrar sesión nos lleva al login
    })
}

