//Minutos a segundos
//Crear un programa que pida ingresar una cantidad en minutos mediante un y muestre un mensaje con el resultado de la conversión en segundos.

const minutos = prompt("Ingrese los minutos que desea convertir");
const segundos = Number(minutos) * 60;

alert(`${minutos} minutos equivalen a ${segundos} segundos.`);
