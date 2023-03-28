import Swal from 'sweetalert2/dist/sweetalert2.js';

//Se capturan elementos del DOM para opciones
//Piedra papel y tijera

let botonPiedra = document.querySelector(".piedra");
let botonPapel = document.querySelector(".papel");
let botonTijera = document.querySelector(".tijera");

//Se capturan elementos del DOM de imags

let manoUsuario = document.querySelector(".mano-usuario");
let manoComputadora = document.querySelector(".mano-computadora");

let puntajeUsuario = document.querySelector(".puntaje-usuario");
let puntajeComputadora = document.querySelector(".puntaje-computadora");

let resultado = document.querySelector(".resultado");

let tablero = document.querySelector(".tablero");

let eleccionUsuario = "";
let eleccionComputadora = "";

let contadorUsuario = 0;
let contadorComputador = 0;

//ALERTA

const swalInicio = () =>{
    Swal.fire(
        'Juguemos Piedra Papel o Tijera!',
        'You clicked the button!',
        'success'
    )
}

swalInicio();

const swalGanador = () =>{
    Swal.fire({
        icon: 'success',
        title: 'Oh no!',
        text: 'Me has ganado! Felicidades.'
    })
}

swalGanador();

const swalPerdedor = () =>{
    Swal.fire({
        icon: 'error',
        title: 'Hehe!',
        text: 'Buen intento pero, gané!'
    })
}

swalPerdedor();

function LimpiarMarcador(){

}