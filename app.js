// Declaramos variables globales
let numeroSecreto = 0;
let intentos = 0;
// Declaramos la lista de números sorteados
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/*
 * Esta función permite asignar texto a un elemento del DOM.
 * elemento: El selector del elemento HTML (ej. 'p', '#miElemento').
 * texto: El texto que queremos asignar al elemento.
 */
function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento); // Conectamos los elementos de nuestro HTML con nuestro JS.
    elementoHTML.innerHTML = texto;
    return;
}

/*
 * Esta función verifica si el número ingresado por el usuario coincide con el número secreto.
 * Además, da retroalimentación sobre si el número ingresado es mayor o menor al número secreto.
 */
function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); // Convertimos el valor a entero con parseInt.
    
    // Validación de la entrada del usuario
    if (isNaN(numeroDeUsuario) || numeroDeUsuario < 1 || numeroDeUsuario > numeroMaximo) {
        asignarTextoElemento('p', `Por favor, ingresa un número válido entre 1 y ${numeroMaximo}`);
        limpiarCaja();
        return;
    }

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento('p', `¡Acertaste el número en ${intentos} ${(intentos === 1) ? 'intento' : 'intentos'}!`);
        document.getElementById('reiniciar').removeAttribute('disabled'); // Habilitamos el botón "Nuevo juego".
    } else {
        // El usuario no acertó.
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento('p', 'El número secreto es menor');
        } else {
            asignarTextoElemento('p', 'El número secreto es mayor');
        }
        intentos++; // Aumentamos el contador de intentos.
        limpiarCaja();
    }
    return;
}

/*
 * Esta función limpia la caja de entrada para permitir un nuevo intento.
 */
function limpiarCaja() {
    document.querySelector('#valorUsuario').value = ''; // Reseteamos el valor de la caja de entrada.
}

/*
 * Esta función genera un número aleatorio entre 1 y el valor máximo (numeroMaximo).
 * Además, verifica que el número generado no se haya sorteado previamente.
 */
function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo) + 1; // Generamos el número aleatorio.

    console.log(numeroGenerado); // Imprimimos el número generado en la consola (para depuración).
    console.log(listaNumerosSorteados); // Mostramos los números ya sorteados.

    // Si ya se sortearon todos los números posibles.
    if (listaNumerosSorteados.length == numeroMaximo) {
        asignarTextoElemento('p', 'Ya se sortearon todos los números posibles');
    } else {
        // Si el número generado ya está en la lista, volvemos a generar un número.
        if (listaNumerosSorteados.includes(numeroGenerado)) {
            return generarNumeroSecreto(); // Recursividad en acción.
        } else {
            listaNumerosSorteados.push(numeroGenerado); // Agregamos el número generado a la lista.
            return numeroGenerado; // Retornamos el número generado.
        }
    }
}

/*
 * Esta función establece las condiciones iniciales del juego.
 */
function condicionesIniciales() {
    asignarTextoElemento('h1', '¡Juego del número secreto!');
    asignarTextoElemento('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto(); // Generamos el número secreto.
    intentos = 1; // Reiniciamos el contador de intentos.
    console.log(numeroSecreto); // Mostramos el número secreto en la consola (para depuración).
}

/*
 * Esta función reinicia el juego para empezar una nueva partida.
 */
function reiniciarJuego() {
    limpiarCaja(); // Limpiamos la caja de entrada.
    condicionesIniciales(); // Restablecemos las condiciones iniciales del juego.
    document.querySelector('#reiniciar').setAttribute('disabled', 'true'); // Deshabilitamos el botón "Nuevo juego".
}

// Establecemos las condiciones iniciales al cargar el script.
condicionesIniciales();
