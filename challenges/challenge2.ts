/* Challenge description: Write a function that takes in a non-empty array of integers sorted in ascending order and returns a
new array of the same length with the squares of the original integers also sorted in ascending
order. If the output number is out of the range [0, SS] (for S=6 the range will be [0, 66]), you will
delete it of the output array. Please, don’t use built-in sort of your language.*/

// Felipe Pulido
// MD5 Hash: b54db41751f15810f78877762d09693a
// S = 5

// Pruebas
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9], 5)); // [ 1, 4, 9, 25, 36 ]
console.log(sortedSquaredArray([-2, -1], 5)); //[ 1, 4 ]
console.log(sortedSquaredArray([-6, -5, 0, 5, 6], 5)); //[ 0, 25, 25, 36, 36 ]
console.log(sortedSquaredArray([-10, 10], 5)); //[]

function sortedSquaredArray(inputArray: number[], S: number): number[] {
  const SS = S * 10 + S; // Límite superior en función de S
  const result: number[] = [];
  let start = 0;
  let end = inputArray.length - 1;

  // Iterar usando dos punteros desde ambos extremos del array
  while (start <= end) {
    const squareStart = inputArray[start] * inputArray[start];
    const squareEnd = inputArray[end] * inputArray[end];

    if (squareStart < squareEnd) {
      if (squareEnd <= SS) {
        result.unshift(squareEnd); // Agragar al inicio
      }
      end--; // Mover el puntero de fin hacia la izquierda
    } else {
      if (squareStart <= SS) {
        result.unshift(squareStart); // Agragar al inicio
      }
      start++; // Mueve el puntero de inicio hacia la derecha
    }
  }

  return result;
}
