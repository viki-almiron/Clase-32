//Tiempo de viaje
//Crear un programa que pida al usuario la distancia de su recorrido y mostrar en un mensaje cuánto tiempo tardaría en completar el recorrido en distintos medios de transporte, definiendo de antemano distintas velocidades para distintos medios de transporte (p. ej.: a pie: 5 km/hora, bici 10km/hora, etc.).

const distancia = prompt("Ingrese la distancia de su recorrido en Km");
const apie =  distancia / 5;
const bici = distancia / 10;

alert(`Usted tardará en llegar a su destino:
-${apie} hs a pie.
-${bici} hs en bici.`); 
