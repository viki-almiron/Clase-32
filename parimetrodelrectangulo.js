//Perímetro de un rectángulo
//Crear un programa que pida al usuario ingresar el valor de la altura y el valor del ancho de un rectángulo, calcular su perímetro y mostrarlo en un mensaje.

const altura = prompt("Ingrese la altura del rectangulo");
const ancho = prompt("Ingrese el ancho del triangulo");
const perimetro = 2 * ( Number(altura) + Number(ancho));

alert(`El perimetro del rectangulo es: ${perimetro}.`);
