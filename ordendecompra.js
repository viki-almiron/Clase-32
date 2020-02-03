//Orden de compras
//Crear un programa que tome la orden de compra de un local. Pedir al usuario que ingrese la cantidad que desea comprar de tres productos distintos, uno por uno, mostrar el valor total de la compra y preguntar en cuántas cuotas desea realizar el pago. Mostrar un mensaje final con el detalle y el valor total la compra, cantidad de cuotas y valor de cada una de las cuotas. Los precios de los productos deben estar definidos de antemano en variables.

const producto1 = "remeras";
const precioProducto1 = 600;
const producto2 = "pantalones";
const precioProducto2 = 1000;
const producto3 = "zapatillas";
const precioProducto3 = 2000;

const cantidadProducto1 = prompt(`Ingrese la cantidad de ${producto1} que desea comprar`);

const cantidadProducto2 = prompt(`Ingrese la cantidad de ${producto2} que desea comprar`);

const cantidadProducto3 = prompt(`Ingrese la cantidad de ${producto3} que desea comprar`);

const valorTotal = (precioProducto1 * cantidadProducto1) + (precioProducto2 * cantidadProducto2) + (precioProducto3 * cantidadProducto3);

alert(`El precio total de la compra es $${valorTotal}.`);
const cuotas = prompt("Ingrese el número de cuotas");
const valorCuotas = valorTotal / cuotas;

alert(`Su orden de compra:
- ${cantidadProducto1} ${producto1},
- ${cantidadProducto2} ${producto2},
- ${cantidadProducto3} ${producto3}.

- El valor total de la compra es de: $${valorTotal},
- Numero de cuotas: ${cuotas}, 
- Valor de cada cuota: $${valorCuotas}`);
