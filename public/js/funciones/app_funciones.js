
import Swal  from "sweetalert2";

export const mobileMenu=()=>{
    const mobileMenu = document.querySelector('.mobile-menu');
    const navegacion = document.querySelector('.navegacion');
    const barras = document.querySelectorAll('.mobile-menu span');

    if(mobileMenu){
        mobileMenu.addEventListener('click',()=>{
            navegacion.classList.toggle('activado');
            barras.forEach(child=>{child.classList.toggle('animado')});
        });
    }

    
}

export const tarjetas=()=>{
    const tarjeta1= document.querySelector('#item-1');
    const titulo1 = document.querySelector('#titulo-1');
    const parrafoDesafio1 = document.querySelector('#back-desafio-1');

    tarjeta1.addEventListener('click',()=>{
        // console.log('hola')
        titulo1.classList.toggle('ocultar');
        parrafoDesafio1.classList.toggle('mostrar');
    });

    const tarjeta2= document.querySelector('#item-2');
    const titulo2 = document.querySelector('#titulo-2');
    const parrafoDesafio2 = document.querySelector('#back-desafio-2');

    tarjeta2.addEventListener('click',()=>{
        // console.log('hola')
        titulo2.classList.toggle('ocultar');
        parrafoDesafio2.classList.toggle('mostrar');
    });


    const tarjeta3= document.querySelector('#item-3');
    const titulo3 = document.querySelector('#titulo-3');
    const parrafoDesafio3 = document.querySelector('#back-desafio-3');

    tarjeta3.addEventListener('click',()=>{
        // console.log('hola')
        titulo3.classList.toggle('ocultar');
        parrafoDesafio3.classList.toggle('mostrar');
    });



    const tarjeta4= document.querySelector('#item-4');
    const titulo4 = document.querySelector('#titulo-4');
    const parrafoDesafio4 = document.querySelector('#back-desafio-4');

    tarjeta4.addEventListener('click',()=>{
        // console.log('hola')
        titulo4.classList.toggle('ocultar');
        parrafoDesafio4.classList.toggle('mostrar');
    });


   

    
}

export const navegacionFija=()=>{
    const barra = document.querySelector('.header');

    if(barra){
        
    }
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
        
    });

    const contenidoPrincipal = document.querySelector('.contenido-principal');

    if(contenidoPrincipal){
        observer.observe(document.querySelector('.contenido-principal'));
    }

    
    
}

export const navegacionFija2=()=>{
    const barra = document.querySelector('.header');

    
    const observer = new IntersectionObserver(function(entries){
        if(entries[0].isIntersecting){
            barra.classList.remove('fijo');
        }else{
            barra.classList.add('fijo');
        }
        
    });

    const productos = document.querySelector('.productos');

    if(productos){
        observer.observe(document.querySelector('.productos'));
    }
    
    
}



export const irAbajo=()=>{
    const boton = document.querySelector('.boton');

    if(boton){
        boton.addEventListener('click',function(){
        
            window.scrollTo({
                top: 622,
                
            })
            
             
         })
    }

    
}

export const navegacionFija3=()=>{
    const ham = document.querySelector('.ham-cv');
    const nav1 = document.querySelector('.navegacion');
    const nav2 = document.querySelector('.navegacion-ingreso');
    const barras = document.querySelectorAll('.ham-cv span');
    const body = document.querySelector('body');

    if(ham){
        ham.addEventListener('click',()=>{
            nav1.classList.toggle('activado');
            nav2.classList.toggle('activado');
            barras.forEach(child=>{child.classList.toggle('animado')});
            body.classList.toggle('hidden');
        })
    }
}

export const desplegarPasos=()=>{
    const botonDesplegable = document.querySelector('.boton-desplegable');
    const pasos = document.querySelector('.pasos');
    const animado = document.querySelector('.boton-desplegable i');

    if(botonDesplegable){
        botonDesplegable.addEventListener('click',()=>{
            pasos.classList.toggle('mostrar');
            animado.classList.toggle('animado');
        })
    }

}

export const contador=()=>{
    const numeroEmpleos = document.querySelector('.numero-empleos span');
    const numeroEmpresas = document.querySelector('.numero-empresas span');
    const numeroRubros = document.querySelector('.numero-rubros span');

    let cantidad=0;
    let cantidad2=0;
    let cantidad3=0;

    const formatoNumero = (number) => {
        const exp = /(\d)(?=(\d{3})+(?!\d))/g;
        const rep = '$1,';
        let arr = number.toString().split('.');
        arr[0] = arr[0].replace(exp,rep);
        return arr[1] ? arr.join('.'): arr[0];
      }

    if(numeroEmpleos){

        let tiempo = setInterval(()=>{
            cantidad +=10
            numeroEmpleos.textContent=formatoNumero(cantidad);
    
            if(cantidad===1200){
                clearInterval(tiempo)
            }
        },35)
    }

    if(numeroRubros){
        let tiempo = setInterval(()=>{
            cantidad3 +=1
            numeroRubros.textContent=formatoNumero(cantidad3);
    
            if(cantidad3===50){
                clearInterval(tiempo)
            }
        },60)
    }

    if(numeroEmpresas){
        let tiempo = setInterval(()=>{
            cantidad2 +=10
            numeroEmpresas.textContent=formatoNumero(cantidad2);
    
            if(cantidad2===300){
                clearInterval(tiempo)
            }
        },70)
    }
    
}

export const preguntas=()=>{


    //PREGUNTA 1
    const pregunta1 = document.querySelector('.pregunta-1');
    const p1r1 = document.querySelector('.p1r1.respuesta');
    const video1 = document.querySelector('.video-1');
    const p1r2 = document.querySelector('.p1r2.respuesta');
    const video2 = document.querySelector('.video-2');
    const rpta = document.querySelector('.rpta-1');

    //PREGUNTA 2
    const pregunta2 = document.querySelector('.pregunta-2');
    const p2r1 = document.querySelector('.p2r1.respuesta');
    const video3 = document.querySelector('.video-3');
    const p2r2 = document.querySelector('.p2r2.respuesta');
    const video4 = document.querySelector('.video-4');
    const rpta2 = document.querySelector('.rpta-2');

    const puntos = document.querySelector('.puntuacion');

    let puntaje=0;

    let añadirPuntos = 0;

    let puntajeAnterior = 0;

    const duracion = 150;

    if(p1r1){
        p1r1.addEventListener('click',()=>{

            
            video1.classList.add('mostrar');
            // video2.classList.remove('mostrar');
            // video3.classList.remove('mostrar');
            // video4.classList.remove('mostrar');
            p1r1.classList.add('ocultar');
            p1r2.classList.add('ocultar');
            pregunta2.classList.add('mostrar');


            
            rpta.classList.add('mostrar');

            rpta.textContent = p1r1.textContent;
            
            let tiempo = setInterval(()=>{
                añadirPuntos=11;
                puntos.textContent = puntaje;
                puntaje +=1;
                if(puntaje===añadirPuntos){
                    clearInterval(tiempo)
                }
            },duracion);
            
            puntajeAnterior = puntaje;
        })
    }

    if(p1r2){
        p1r2.addEventListener('click',()=>{
            
            video2.classList.add('mostrar');

            p1r1.classList.add('ocultar');
            p1r2.classList.add('ocultar');
            pregunta2.classList.add('mostrar');


            
            rpta.classList.add('mostrar');

            rpta.textContent = p1r2.textContent;
            
            let tiempo = setInterval(()=>{
                añadirPuntos=6;
                puntos.textContent = puntaje;
                puntaje +=1;
                if(puntaje===añadirPuntos){
                    clearInterval(tiempo)
                }
            },duracion);
            
            puntajeAnterior = puntaje;
            
        })
    }

    if(p2r1){
        p2r1.addEventListener('click',()=>{
            
            
            video3.classList.add('mostrar');
            p2r1.classList.add('ocultar');
            p2r2.classList.add('ocultar');
            pregunta1.classList.add('ocultar');
            

            rpta2.classList.add('mostrar');
            rpta2.textContent = p2r1.textContent;

            puntajeAnterior = puntaje + 10;

            let tiempo = setInterval(()=>{
                // añadirPuntos=11
                // puntajeAnterior = puntaje + 11
                puntos.textContent = puntaje;
                puntaje +=1;
                if(puntaje===puntajeAnterior){
                    clearInterval(tiempo)
                }
            },duracion);


        })
    }

    if(p2r2){
        p2r2.addEventListener('click',()=>{
            
          
            video4.classList.add('mostrar');
            p2r1.classList.add('ocultar');
            p2r2.classList.add('ocultar');
            pregunta1.classList.add('ocultar');

            rpta2.classList.add('mostrar');
            rpta2.textContent = p2r2.textContent;

            puntajeAnterior = puntaje + 5;

            let tiempo = setInterval(()=>{
                // añadirPuntos=11
                // puntajeAnterior = puntaje + 11
                puntos.textContent = puntaje;
                puntaje +=1;
                if(puntaje===puntajeAnterior){
                    clearInterval(tiempo)
                }
            },duracion);

        })
    }
    
}


export const mobileMenuNetworking=()=>{
    const ham = document.querySelector('.ham-networking');
    const nav1 = document.querySelector('.barra-navegacion');
    const barras = document.querySelectorAll('.ham-networking span');
    const body = document.querySelector('body');

    if(ham){
        ham.addEventListener('click',()=>{
            nav1.classList.toggle('activado');
            
            barras.forEach(child=>{child.classList.toggle('animado')});
            body.classList.toggle('hidden');
        })
    }
}

export const inscribirse=()=>{
    const inscribirse = document.querySelectorAll('.evento-inscribirse');

    if(inscribirse){
        
        inscribirse.forEach((item)=>{
            item.addEventListener('click',()=>{
                Swal.fire(
                    'Enhorabuena!',
                    'Te has inscrito al evento!',
                    'success'
                  )
            })
        })
        
        
    }
}

export const eventosGestion=()=>{
    const botonEnviar = document.querySelector('.boton-enviar');
    const ministerio = document.querySelector('.ministerio');
    const principalEventos = document.querySelector('.principal-eventos-gestion')
    const e1 = document.querySelector('.e-1');
    const e2 = document.querySelector('.e-2');
    const formulario = document.querySelector('.formulario-contenedor')
    
    

    if(botonEnviar){
        botonEnviar.addEventListener('click',()=>{
            var num = Math.floor((Math.random()*2))
            console.log(num);
            principalEventos.classList.add('mostrar');
            formulario.classList.add('ocultar');
            if(num==1){
                // alert('0')
               e1.classList.add('ocultar');
               e2.classList.add('mostrar')
            }else{
                e1.classList.add('mostrar');
                e2.classList.add('ocultar');
                
            }

           
            
        })
    }
}