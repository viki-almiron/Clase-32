//Celsius a Fahrenheit
//Crear un programa que pida ingresar una cantidad de grados Celsius y muestre un mensaje con el resultado de la conversión a grados Fahrenheit.

const celsius = prompt("Ingrese grados Celsius");
const fahrenheit = (Number(celsius) * 9/5) + 32;

alert(`${celsius} grados Celsius equivalen a ${fahrenheit} grados Fahrenheit.`);