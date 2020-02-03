//Cantidad de huéspedes
//Crear un programa que pida al usuario ingresar, de a uno por vez, cuántas habitaciones tiene un hotel para 2, 3 y 4 personas, y muestre el máximo de huéspedes que puede albergar.

const habitacionesPara2 = prompt("Ingrese cuantas habitaciones para dos personas tiene el hotel");
const habitacionesPara3 = prompt("Ingrese cuantas habitaciones para tres personas tiene el hotel");
const habitacionesPara4 = prompt("Ingrese cuantas habitaciones para cuatro personas tiene el hotel");
const numerodehuespedes = (habitacionesPara2 * 2) + (habitacionesPara3 * 3) + (habitacionesPara4 * 4); 

alert(`Su hotel puede albergar como máximo a ${numerodehuespedes} huéspedes.`);
