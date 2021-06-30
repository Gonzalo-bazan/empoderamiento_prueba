import axios from "axios";
import Swal from "sweetalert2";

export const enviarComentario=()=>{
    const botonComentario = document.querySelector('.boton-comentario');

    const nombreComentario = document.querySelector('.input-nombre');

   

    if(botonComentario){
       
        botonComentario.addEventListener('click',()=>{

            
            if(nombreComentario.textContent=" "){
                        Swal.fire(
                            'Error',
                            'Debes llenar todos los campos',
                            'error'
            
                        )
            }else{
                Swal.fire(
                    'Comentario enviado',
                    'El comentario se ha enviado correctamente',
                    'success'

                )

                setTimeout(()=>{
                    window.location.href='/comentarios'
                },2000);
            }
            
            
           
        })
    }
}