

import { mobileMenu } from "./funciones/app_funciones";

import { tarjetas } from "./funciones/app_funciones";

import {navegacionFija} from "./funciones/app_funciones";

import {navegacionFija2} from "./funciones/app_funciones";

import {navegacionFija3} from "./funciones/app_funciones";

import {irAbajo} from "./funciones/app_funciones";

import { desplegarPasos } from "./funciones/app_funciones";

import {enviarComentario} from "./modulos/comentarios";

   

document.addEventListener('DOMContentLoaded',()=>{
    mobileMenu();
    // tarjetas();
    navegacionFija();
    navegacionFija2();
    navegacionFija3();
    irAbajo();
    desplegarPasos();
    // enviarComentario();

    
});