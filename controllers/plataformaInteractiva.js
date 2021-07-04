

exports.home_plataforma=(req,res)=>{
    res.render('plataforma-interactiva',{
        nombrePagina: 'Plataforma Interactiva'
    });
}

exports.plataforma_preguntas=(req,res)=>{
    res.render('plataforma-interactiva/preguntas',{
        nombrePagina: 'Preguntas'
    });
}