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
    res.render('cv-anonimo/iniciar-sesion',{
        nombrePagina: 'Iniciar Sesión'
    });
}

exports.registrar_anonimo=(req,res)=>{
    res.render('cv-anonimo/registrar',{
        nombrePagina: 'Registrate'
    });
}