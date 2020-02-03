//Incremento
//Crear un programa que pida ingresar una número de partida y una cantidad a ir incrementando y mostrar cinco mensajes seguidos que muestren el número del mensaje y el total incrementado hasta el momento (p. ej.: empezando con 5 e incrementando 5, "Incremento 1) Total: 10", "Incremento 2) Total: 15", "Incremento 3) Total: 20", etc.).

const numerodepartida= prompt("Ingrese su número de partida");
const incremento= prompt("Ingrese la cantidad que desea ir incrementado");
const incremento1= Number(numerodepartida) + Number(incremento);
const incremento2= Number(incremento1) + Number(incremento);
const incremento3= Number(incremento2) + Number(incremento);
const incremento4= Number(incremento3) + Number(incremento);
const incremento5= Number(incremento4) + Number(incremento);

alert(`- Incremento 1) total: ${incremento1}`);
alert(`- Incremento 2) total: ${incremento2}`);
alert(`- Incremento 3) total: ${incremento3}`);
alert(`- Incremento 4) total: ${incremento4}`);
alert(`- Incremento 5) total: ${incremento5}`);

