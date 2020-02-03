//Días de vacaciones
//Crear un programa que pida al usuario ingresar cuántos años lleva trabajando en una empresa, y le devuelva la cantidad de días de vacaciones al año que le corresponden, siendo 15 días hasta 3 años y 2 días más por cada año extra (p. ej.: a 6 años corresponden 21 días).

const añosTrabajados = prompt("Ingrese cuantos años lleva trabajando");
let diasdevacaciones = 15;

if (añosTrabajados > 3){
    diasdevacaciones += (añosTrabajados - 3) * 2;
}

alert(`A usted le corresponden ${diasdevacaciones} días de vacaciones.`);
