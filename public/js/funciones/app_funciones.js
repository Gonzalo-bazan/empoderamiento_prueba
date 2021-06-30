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

