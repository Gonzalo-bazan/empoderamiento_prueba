const UsuariosCV = require('../models/UsuariosCV');

exports.home_anonimo=(req,res)=>{
    res.render('cv-anonimo',{
        nombrePagina: 'CV Anónimo'
    })
}

exports.nosotros_anonimo=(req,res)=>{
    res.render('cv-anonimo/sobre-nosotros',{
        nombrePagina: 'Sobre Nosotros'
    });
}

exports.empleos_anonimo=(req,res)=>{
    res.render('cv-anonimo/empleos',{
        nombrePagina: 'Empleos'
    });
}

exports.empresas_anonimo=(req,res)=>{
    res.render('cv-anonimo/empresas',{
        nombrePagina: 'Empresas'
    });
}

exports.iniciar_anonimo=(req,res)=>{

    const { error } = res.locals.mensajes

    res.render('cv-anonimo/iniciar-sesion',{
        nombrePagina: 'Iniciar Sesión',
        error
    });
}

exports.registrar_anonimo=(req,res)=>{
    res.render('cv-anonimo/registrar',{
        nombrePagina: 'Registrate'
    });
}

exports.crearUsuario=async(req,res)=>{
    //Datos

    const {nombre,apellidoPaterno,apellidoMaterno,email,password} =req.body;

    try {
        //Crear el usuario

        await UsuariosCV.create({
            nombre,
            apellidoPaterno,
            apellidoMaterno,
            email,
            password
        });

        res.redirect('/cv-anonimo/iniciar-sesion')
        
    } catch (error) {
        req.flash('error',error.errors.map(error=>error.message))
        res.render('cv-anonimo/registrar',{
            mensajes: req.flash(),
            nombrePagina: 'Registrate',
            email,
            password
        })
    }
}

exports.usuarios_cv=(req,res)=>{

    const usuarioId = res.locals.usuario.id;

    const nombre = res.locals.usuario.nombre;

    const apellidoPaterno = res.locals.usuario.apellidoPaterno;

    const apellidoMaterno = res.locals.usuario.apellidoMaterno;



    res.render('cv-anonimo/usuarios',{
        nombrePagina: 'Usuarios',
        nombre,
        apellidoPaterno,
        apellidoMaterno
    });
}

exports.mostrar_cv=(req,res)=>{
    const usuarioId = res.locals.usuario.id;

    const nombre = res.locals.usuario.nombre;

    const apellidoPaterno = res.locals.usuario.apellidoPaterno;

    const apellidoMaterno = res.locals.usuario.apellidoMaterno;



    res.render('cv-anonimo/usuarios-cv',{
        nombrePagina: 'CV Usuario',
        nombre,
        apellidoPaterno,
        apellidoMaterno
    });
}