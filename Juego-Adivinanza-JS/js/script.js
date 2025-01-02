// Se Determina un Número al Azar del 1 al 100:

let numeroRandom = Math.floor(Math.random()* 100) + 1;

// Se Obtienen los ID's del HTML:

let numeroEntrada = document.getElementById('numeroEntrada');
let mensaje = document.getElementById('mensaje');
let cantidadIntentos = document.getElementById('cantidadIntentos');

let intentos = 0;

// Función que toma el Número Ingresado y lo evalua:

function EvaluarNumero(){

    // Cantidad de Intentos:
    intentos++;
    cantidadIntentos.textContent = intentos;

    // Casting del Número Ingresado convertido a Número Entero:
    let numeroIngresado = parseInt(numeroEntrada.value);

    // Condicional para Determinar Errores en datos Ingresados:
    if(numeroIngresado < 1 || numeroIngresado > 100 || isNaN(numeroIngresado)){
        mensaje.textContent = "Por favor, Ingrese un Número del 1 al 100!";
        mensaje.style.color = "rgb(255, 63, 63)";
        return;
    } 
    
    // Condicional para Evaluar Coincidencias y Números más Bajos o Altos:
    if(numeroIngresado === numeroRandom){
        mensaje.textContent = "¡FELICIDADES! ¡HAS ADIVINADO EL NÚMERO!";
        mensaje.style.color = "rgb(5, 181, 5)";
        numeroEntrada.disabled = true;
    } else if(numeroIngresado < numeroRandom){
        mensaje.textContent = "Ingrese un Número MÁS ALTO!";
        mensaje.style.color = "rgb(255, 63, 63)";
    } else {
        mensaje.textContent = "Ingrese un Número MÁS BAJO!";
        mensaje.style.color = "rgb(255, 63, 63)";
    }

}
