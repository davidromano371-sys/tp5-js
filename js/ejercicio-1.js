//1- Crea una web con bootstrap y js, que contenga un botón comenzar el juego, en ese momento se crea un número aleatorio que el usuario deberá adivinar, la interfaz del usuario debe tener además un input para ingresar un número y un botón enviar, al presionar el botón enviar mostrar en un alert si el usuario adivino o no el número mágico, si no lo adivino indicarle con un alert si el numero que ingreso es mayor o menor al número mágico.
//Cuando el usuario adivine el numero mostrar un mensaje indicando al usuario que adivino el numero.

let numeroMagico = null;

const btnComenzar = document.getElementById("btnComenzar");
const inputNumero = document.getElementById("inputNumero");
const btnEnviar = document.getElementById("btnEnviar");

btnComenzar.addEventListener("click", () => {
  numeroMagico = Math.floor(Math.random() * 100) + 1;
  inputNumero.value = "";
  alert("¡Juego iniciado! Adiviná un número entre 1 y 100.");
});

btnEnviar.addEventListener("click", () => {
  if (numeroMagico === null) {
    alert("Primero debes comenzar el juego.");
    return;
  }

  if (inputNumero.value === "") {
    alert("Ingresá un número");
    return;
  }

  const numeroIngresado = Number(inputNumero.value);

  if (numeroIngresado === numeroMagico) {
    alert("¡Adivinaste el número! 🎉");
    numeroMagico = null;
  } else if (numeroIngresado > numeroMagico) {
    alert("No adivinaste. El número que ingresaste es MAYOR al número mágico");
  } else {
    alert("No adivinaste. El número que ingresaste es MENOR al número mágico");
  }
});