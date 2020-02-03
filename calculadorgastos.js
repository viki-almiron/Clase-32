//Calculador gastos
//Crear un programa que pida al usuario cuanto dinero disponible tiene, y vaya preguntando cuánto tiene que pagar por cada servicio, pidiendo el nombre del servicio y el monto a pagar, uno a la vez. Cada vez que pide ingresar un nuevo servicio, el mensaje debe mostrar cuántos servicios quedan por ingresar, utilizando una variable, y mostrar cuánto dinero disponible queda. Al final debe mostrar una lista con todos los servicios a pagar y el monto de cada uno, además del dinero disponible que le queda. Hacerlo con 3 servicios.

const dinero = prompt("Ingrese su dinero disponible");
let totalDeServicios = 3;

const servicio1 = prompt("Ingrese el nombre del primer servicio");
const montoServicio1 = prompt(`Ingrese el monto a pagar del servicio ${servicio1}`);
totalDeServicios -= 1;
alert(`Le quedan ${totalDeServicios} servicios por ingresar`);

const servicio2 = prompt("Ingrese el nombre del segundo servicio");
const montoServicio2 = prompt(`Ingrese el monto a pagar del servicio ${servicio2}`);
totalDeServicios -= 1;
alert(`Le quedan ${totalDeServicios} servicios por ingresar`);

const servicio3 = prompt("Ingrese el nombre del tercer servicio");
const montoServicio3 = prompt(`Ingrese el monto a pagar del servicio ${servicio3}`);

alert(`Usted pagará
-${servicio1}: $${montoServicio1},
-${servicio2}: $${montoServicio2},
-${servicio3}: $${montoServicio3}.`);
const dinerodisponible = dinero - montoServicio1 - montoServicio2 - montoServicio3;
alert(`Le quedan $${dinerodisponible} disponibles.`);