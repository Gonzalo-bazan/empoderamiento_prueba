exports.home_networking =(req,res)=>{
    res.render('networking',{
        nombrePagina: 'Networking'
    });
}

exports.nosotros_networking=(req,res)=>{
    res.render('networking/nosotros',{
        nombrePagina: 'Nosotros'
    });
}

exports.eventos_networking=(req,res)=>{
    res.render('networking/eventos',{
        nombrePagina: 'Eventos'
    });
}

exports.gestion_networking=(req,res)=>{
    res.render('networking/eventos-gestion',{
        nombrePagina: 'Eventos Gestión Pública'
    })
}

exports.gestion_formulario=(req,res)=>{
    res.render('networking/formulario',{
        nombrePagina: 'Formulario'
    })
}