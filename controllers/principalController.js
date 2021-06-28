const Comentarios = require('../models/Comentarios');


exports.home=(req,res)=>{
    res.render('index',{
        nombrePagina:'Empoderamiento Económico de la Mujer'
    })
};

exports.productos_home=(req,res)=>{
    res.render('productos',{
        nombrePagina: 'Productos'
    })
}

exports.comentarios_home=async (req,res)=>{
    res.render('comentarios',{
        nombrePagina: 'Comentarios'
    })

    //Validar

    

    // let errores = [];

    // if(!nombre){
    //     errores.push({'texto': 'Agrega tu nombre'})
    // }
    // if(!apellidoPaterno){
    //     errores.push({'texto': 'Agrega tu apellido paterno'})
    // }
    // if(!apellidoMaterno){
    //     errores.push({'texto': 'Agrega tu apellido materno'})
    // }
    // if(!apellidoMaterno){
    //     errores.push({'texto': 'Agrega tu apellido materno'})
    // }
    // if(producto === '-- Seleccione --'){
    //     errores.push({'texto': 'Elige un producto'})
    // }
    // if(!comentario){
    //     errores.push({'texto': 'Escribe un comentario'})
    // }

    // //Errores

    // if(errores.length>0){
    //     res.render('comentarios',{
    //         nombrePagina: 'Comentarios',
    //         errores
    //     })
    // }else{
    
        // next();
    // }
        //No hay errores
        //Insertar en la base de datos
        // const usuarioId = res.locals.usuario.id; 
    
    
    
}

exports.enviar_comentario=async(req,res)=>{
    const nombre = req.body.nombre;
    const apellidoPaterno = req.body.apellidoPaterno;
    const apellidoMaterno = req.body.apellidoMaterno;
    const producto = req.body.producto;
    const comentario = req.body.comentario;

    await Comentarios.create({ nombre, apellidoPaterno, apellidoMaterno, producto, comentario });
    res.redirect('/comentarios');
}