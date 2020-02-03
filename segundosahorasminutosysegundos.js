//Segundos a horas, minutos y segundos
//Crear un programa que pida ingresar una cantidad en segundos y muestre un mensaje con el resultado de la conversión en horas, minutos y segundos que corresponde a esa cantidad (p.ej. 3602 segundos = 1 hora 2 segundos). (Usar operador módulo).

const segundos= prompt("Ingrese cantidad de segundos");
const minutos = Number(segundos) / 60;
const segundosSobrantes = Number(segundos) % 60;
const minutosFinales = (segundos - segundosSobrantes) / 60;
const minutosSobrantes = Number(minutos) % 60;
const horasFinales= (minutos - minutosSobrantes) / 60;

alert(`${segundos} equivalen a ${horasFinales} hs, ${minutosFinales} m, ${segundosSobrantes} s.`); 
