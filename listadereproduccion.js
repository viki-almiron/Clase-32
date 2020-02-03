//Lista de reproducción
//Crear un programa que pida al usuario ingresar, por separado, el nombre de una playlist y el título de tres canciones, y al finalizar se muestre un mensaje que diga, p. ej.: "Se ha creado la playlist 'Hits de los 80s' con las canciones 'Africa', 'Maniac', 'Final Countdown'".

const playlist = prompt("Ingrese el nombre de su playlist");
const cancion1 = prompt("Primera canciòn de la lista");
const cancion2 = prompt("Segunda canciòn de la lista");
const cancion3 = prompt("Tercera canciòn de la lista");

alert(`Se ha creado la playlist "${playlist}" con las canciones
- ${cancion1}
- ${cancion2}
- ${cancion3}`);
