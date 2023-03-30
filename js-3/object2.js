//Ejercicio 2
const persona = {
  nombre: "Juan",
  edad: 25,
  ciudad: "Bogotá",
  profesion: "Desarrollador"
};

console.log(persona);
function presentacion(obj) {
  return "Hola, mi nombre es " + obj.nombre + ", tengo " + obj.edad + " años y vivo en " + obj.ciudad + ".";
}
const mensaje = presentacion(persona);
console.log(mensaje);
persona.hobbies = ["natación", "leer", "jugar videojuegos"];
console.log(persona.hobbies);
for (let i = 0; i < persona.hobbies.length; i++) {
  console.log(persona.hobbies[i]);
}

//Resultado
{ nombre: 'Juan', edad: 25, ciudad: 'Bogotá', profesion: 'Desarrollador' }
Hola, mi nombre es Juan, tengo 25 años y vivo en Bogotá.
[ 'natación', 'leer', 'jugar videojuegos' ]
natación
leer
jugar videojuegos

