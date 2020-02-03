//Kilómetros a millas
//Crear un programa que pida ingresar una cantidad de kilómetros y muestre un mensaje con el resultado de la conversión en millas.

const kilometros = prompt("Ingrese la cantidad de kilometros que desea convertir");
const millas = Number(kilometros) * 0.62137;

alert(`${kilometros} Km equivalen a ${millas} millas.`);
