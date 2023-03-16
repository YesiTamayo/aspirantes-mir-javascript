//Ejercicio 1

const pedro = {
  nombre: "Pedro Perez",
  edad: 30,
  activo: true,
  hobbies: ["programar", "squash", "piano"]
};
console.log(pedro.edad);
pedro.estatura = 1.8;
delete pedro.activo;
for (const propiedad in pedro) {
  console.log(propiedad + ": " + pedro[propiedad]);
}
pedro.saluda = function() {
  return "Hola, me llamo " + this.nombre;
}
console.log(pedro.saluda());

// Resultado 
30
nombre: Pedro Perez
edad: 30
hobbies: programar,squash,piano
estatura: 1.8
saluda: function()
Hola, me llamo Pedro Perez

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

//Ejercicio 3
const receta = {
  nombre: "Sandwich",
  ingredientes: []
};

receta.ingredientes.push({
  nombre: "Pan",
  cantidad: 2
});

receta.ingredientes.push({
  nombre: "Queso",
  cantidad: 1
});

console.log(receta.ingredientes[0].nombre);
let cantidadTotal = 0;

for (let i = 0; i < receta.ingredientes.length; i++) {
  cantidadTotal += receta.ingredientes[i].cantidad;
}

console.log("Cantidad total de ingredientes: " + cantidadTotal);

//Resultado
Pan
Cantidad total de ingredientes: 3
