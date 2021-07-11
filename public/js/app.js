

import { mobileMenu } from "./funciones/app_funciones";



import {navegacionFija} from "./funciones/app_funciones";

import {navegacionFija2} from "./funciones/app_funciones";

import {navegacionFija3} from "./funciones/app_funciones";

import {irAbajo} from "./funciones/app_funciones";

import { desplegarPasos } from "./funciones/app_funciones";

import { contador } from "./funciones/app_funciones";

import { preguntas } from "./funciones/app_funciones";

import { mobileMenuNetworking } from "./funciones/app_funciones";

import { inscribirse } from "./funciones/app_funciones";

import { eventosGestion } from "./funciones/app_funciones";



   

document.addEventListener('DOMContentLoaded',()=>{
    

    preguntas();
    mobileMenu();
    
    navegacionFija();
    navegacionFija2();
    navegacionFija3();
    irAbajo();
    desplegarPasos();
    contador();
    mobileMenuNetworking();
    inscribirse();
    eventosGestion();
    
    

    
});