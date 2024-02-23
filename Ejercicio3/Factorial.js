/*
Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario un número por prompt o por input y guardarlo.
Debe calcular el factorial del número recibido utilizando recursión.
Debe imprimir el resultado por consola o por el DOM.
Debe ser capaz de identificar si el dato de entrada es de tipo number, en caso contrario debe mandar un mensaje de error y volver a solicitar el dato.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
5
120.
6
720.
Entrada: 
Salida:
Entrada: 
Salida: 

*/

const prompt = require("prompt-sync")();
function getInput() {
  let num = prompt("Ingrese un numero ");
  if (isNaN(num)) {
    console.log("Error: El valor ingresado no es un número.");
    return getInput();
  } else {
    return Number(num);
  }
}

function factorial(n) {
  if (n == 0 || n == 1) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
}

let num = getInput();
console.log(`El factorial de ${num} es: ` + factorial(num));
