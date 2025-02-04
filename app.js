

/*
    * Para esto tambien podemos hacerlo por clases pero debido a que solo tenemos un parrafo y un titulo no hay necesidad de mas 
    * esto tambien va dentro de la funcion let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un nuemero del 1 al 10';

*Aunque una funcion no retorne nada deberas ponerle return para que sea una buena practica
*/

//const { disable } = require("express/lib/application");


let numeroSecreto = generarNumeroSecreto();
let intentos = 1;



function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento); // De esta manera conectamos los elementos de nuestro HTMl con nuestro Js 
    elementoHTML.innerHTML = texto;
    return;
}

/** Declaracion de una funcion */

function verificarIntento(){
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // con parseInt convertimos nuestro valor a intero
    //console.log(typeof(numeroDeUsuario)); // Sirve para saber cual es el valor del dato string, int etc
    //console.log(numeroSecreto)
    console.log(typeof(numeroSecreto));
    //console.log(numeroDeUsuario)
    console.log(numeroDeUsuario == numeroSecreto);
    if (numeroDeUsuario === numeroSecreto){
        asignarTextoElemento('p',`Acertaste en el numero ${intentos} ${(intentos === 1) ? 'vez' : 'veces'}`) //Operador ternario en un parametro ? --> If  : --> else
        document.getElementById('reiniciar').removeAttribute('disabled')
    }else{
        // el usuario no acerto 
        if(numeroDeUsuario > numeroSecreto){
            asignarTextoElemento('p','El numero de Usuario es menor')
        }else{
            asignarTextoElemento('p','El numero de usuario es mayor')
        }
        intentos ++;
        limpiarCaja();
    }
    return;
}

// Esta funcion genera el numero secreto y lo regresa
function generarNumeroSecreto (){
    return Math.floor(Math.random()*10)+1;
}

function limpiarCaja(){
    let valorCaja = document.querySelector('#valorUsuario');
    valorCaja.value = "";
    //document.querySelector('#valorUsuario').value

}
function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del numero secreto!');
    asignarTextoElemento('p','Indica el numero del 1 al 10');
    numeroSecreto = generarNumeroSecreto();
    intentos = 1;
}
function reiniciarJuego() {
    //limpiar caja
    limpiarCaja();
    //Indicar mensaje de intervalo de números 
    //Generar el número aleatorio
    //Inicializar el número intentos
    condicionesIniciales();
    //Deshabilitar el botón de nuevo juego
    document.querySelector('#reiniciar').setAttribute('disabled','true');
    
}

condicionesIniciales();M
