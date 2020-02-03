//Datos personales
//Crear un programa que pida al usuario ingresar, por separado, nombre, apellido, edad, nacionalidad, documento, y muestre luego un mensaje que diga: "Nuevo usuario agregado al sistema:" y liste todos los datos juntos.

const nombre = prompt("Ingrese su nombre");
const apellido = prompt("Ingrese su apellido");
const edad = prompt("Ingrese su edad");
const nacionalidad = prompt("Ingrese su nacionalidad");
const documento = prompt("Ingrese su documento");

alert(`Nuevo usuario ingresado al sistema
- Nombre: ${nombre}
- Apellido: ${apellido}
- Edad: ${edad}
- Nacionalidad: ${nacionalidad}
- DNI: ${documento}`);
