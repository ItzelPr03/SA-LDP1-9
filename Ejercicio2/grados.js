/**
 * 
 * Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario la temperatura en grados Celsius por prompt o por un input.
Debe convertir la temperatura ingresada de grados Celsius a grados Fahrenheit y Kelvin
Debe imprimir ambos resultados por consola o por el DOM.
Debe ser capaz de identificar si los datos de entrada sean de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar los datos.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
45.
Grados Kelvin: 318.15
Grados Fahrenheit: 113. 
 14.
Grados Kelvin: 287.15
Grados Fahrenheit: 57.2. 
 * 
 * 
 * 
 */
const prompt = require("prompt-sync")();

let num = prompt("Ingrese la temperatura en grados Celsius: ");

function getInput() {
  let num = prompt("Ingrese la temperatura en grados Celsius: ");

  if (isNaN(num)) {
    console.log("Error! Por favor ingrese un numero no otro tipo de dato");
    return getInput();
  } else {
    return Number(num);
  }
}

function convTemp(celsius) {
  let fahrenheit = (celsius * 9) / 5 + 32;
  console.log(`La temperatura ${celsius}°C es igual a ${fahrenheit}°F`);

  let kelvin = celsius + 273.15;
  console.log(`La temperatura ${celsius}°C es igual a  ${kelvin} K`);
}

getInput();
convTemp(num);
