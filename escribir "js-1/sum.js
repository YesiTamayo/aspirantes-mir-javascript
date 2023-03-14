function suma(numero) {
  let total = 0;
  for (let i = 1; i <= numero; i++) {
    total += i;
  }
  return total;
}

console.log(suma(10));
