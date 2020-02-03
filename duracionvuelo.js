//Duración vuelo
//Crear un programa que pida al usuario ingresar, por separado, 3 destinos de las escalas de un vuelo, y la duración de cada uno de ellos. Al final debe mostrar un mensaje que liste todas las escalas con su duración y la duración total del vuelo.

const primertramo = prompt("Ingrese la duracion del primer tramo de su vuelo");
const primerescala = prompt("Ingrese la duracion de la primer escala de su vuelo");
const segundotramo = prompt("Ingrese la duracion del segundo tramo de su vuelo");
const segundaescala = prompt("Ingrese la duracion de la segunda escala de su vuelo");
const tercertramo = prompt("Ingrese la duracion del tercer tramo de su vuelo");
const duraciontotal = Number(primertramo) + Number(primerescala) + Number(segundotramo) + Number(segundaescala) + Number(tercertramo); 

alert(`-La duración de su primera escala es de: ${primerescala} hs,
-La duración de su segunda escala es de: ${segundaescala} hs,
-La duración total de su vuelo es de: ${duraciontotal} hs.`);
