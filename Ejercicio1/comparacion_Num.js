/**
 * 
 * Instrucciones:

Crear un programa en Javascript que realice lo siguiente:
Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
Prueba tu programa con las siguientes entradas para asegurarte que funcione correctamente:
Entradas: 
4, 4, 2.
Salida:
4, 4, 2.
2, 4, 4
Pruébalo con las combinaciones de números que se te ocurran
 * 
 * 
 */

const prompt = require("prompt-sync")();
let num1 = parseInt(prompt("Ingrese el primer numero "));
let num2 = parseInt(prompt("Ingrese el segundo numero "));
let num3 = parseInt(prompt("Ingrese el tercer numero "));

if (num1 === num2 || num1 === num3 || num2 === num3) {
  console.log("Hay al menos dos numeros que son iguales");
}

if (num1 < num2) {
  if (num2 < num3) {
    numMayor = num3;
    numMedio = num2;
    numMenor = num1;
  } else if (num1 < num3) {
    numMayor = num2;
    numMedio = num3;
    numMenor = num1;
  } else {
    numMayor = num2;
    numMedio = num1;
    numMenor = num3;
  }
} else {
  if (num2 > num3) {
    numMayor = num1;
    numMedio = num2;
    numMenor = num3;
  } else if (num1 > num3) {
    numMayor = num1;
    numMedio = num3;
    numMenor = num2;
  } else {
    numMayor = num3;
    numMedio = num1;
    numMenor = num2;
  }
}

console.log(numMayor);
console.log(numMedio);
console.log(numMenor);
