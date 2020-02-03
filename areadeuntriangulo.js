//Área de un triangulo
//Crear un programa que pida al usuario ingresar el valor de la base y el valor de la altura de un triangulo, calcular su área y mostrarlo en un mensaje.

const base = prompt("Ingrese el valor de la base");
const altura = prompt("Ingrese la altura");
const area = (Number(base) * Number(altura)) / 2;

alert(`El area del triangulo es ${area}.`); 
