/* Challenge description: Given an array of positive integers representing the values of coins in your possession, write a
function that returns the minimum amount of change (the minimum sum of money) that you
CANNOT give change. The given coins can have any positive integer value and aren't necessarily
unique (i.e., you can have multiple coins of the same value). You can use built-in sort of your
language.
*/

// Pruebas
console.log(getMinImpossibleAmount([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(getMinImpossibleAmount([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
console.log(getMinImpossibleAmount([1, 1, 1, 1, 1])); // 6

function getMinImpossibleAmount(coins: number[]): number {
  // Ordenar las monedas en orden ascendente
  coins.sort((a, b) => a - b);

  // Inicializar el cambio máximo que podemos crear
  let currentChangeCreated = 0;

  // Iterar sobre las monedas
  for (const coin of coins) {
    // Si la moneda actual es mayor que el cambio que podemos crear + 1, encontramos el resultado
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    // Actualizar el cambio máximo que podemos generar
    currentChangeCreated += coin;
  }

  // Devolver el resultado final si todas las monedas se pueden combinar
  return currentChangeCreated + 1;
}
