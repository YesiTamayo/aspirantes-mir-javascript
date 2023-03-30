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

