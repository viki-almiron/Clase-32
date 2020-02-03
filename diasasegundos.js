//Días a segundos
//Crear un programa que pida ingresar una cantidad de días y muestre un mensaje con el resultado de la conversión en segundos.

const dias = prompt("Ingrese la cantidad de días que desea convertir");
const segundos = Number(dias) * 86400;

alert(`${dias} días equivalen a ${segundos} segundos`);
