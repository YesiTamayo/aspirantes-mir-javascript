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
