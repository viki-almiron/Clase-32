//Dirección completa
//Crear un programa que pida al usuario ingresar, por separado, la calle, el número, el departamento, el código postal, la ciudad y el país, y muestre un mensaje con toda la dirección completa, p.ej.: "La dirección que ha ingresado es: Calle Falsa 123 3C, 1414, CABA, Argentina".

const calle = prompt("Ingrese su calle");
const numero = prompt("Ingrese el numero");
const departamento = prompt("Ingrese el deprtamento");
const codigopostal = prompt("Ingrese el codigo postal");
const ciudad = prompt("Ingrese su ciudad");
const pais = prompt("Ingrese su pais");

alert(`La dirección que ha ingresado es: ${calle} ${numero} ${departamento}, ${codigopostal}, ${ciudad}, ${pais}`);
