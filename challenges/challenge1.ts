/* Challenge description: Having a list of n numbers with digits in range [0, S],
where n <= 100, switch all list positions in O(n) time. If the input number contains
 a digit greater or equal than S, you will delete the digit from the number, for example
with S=6, 61 becomes 1, and 6 will be deleted from the array. The result should be printed
in console/terminal. Please, don’t use built-in sort of your language.*/

// Felipe Pulido
// MD5 Hash: b54db41751f15810f78877762d09693a
// S = 5

// Pruebas

console.log(filterAndReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // [4, 3, 2, 1]
console.log(
  filterAndReverseArray([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 5)
); //[34, 21, 13, 3, 2,  1,  1, 0]

// Solucion

function filterAndReverseArray(
  inputArray: number[],
  s: number
): number[] | void {
  let arrayLength = inputArray.length;

  // Validación de tamaño del arreglo
  if (arrayLength > 100 || arrayLength === 0) {
    console.log(
      "La longitud del arreglo debe ser menor o igual a 100 y mayor a 0."
    );
    return;
  }

  let filteredArray: number[] = [];

  for (let num of inputArray) {
    let filteredNumber = "";
    let numString = num.toString(); // Convertir el número a cadena para recorrer cada dígito

    for (let digit of numString) {
      if (parseInt(digit) < s) {
        filteredNumber += digit; // Agregar dígitos que cumplen con el rango [0, s)
      }
    }

    // Verificar que no haya quedado vacío el número
    if (filteredNumber.length > 0) {
      filteredArray.push(parseInt(filteredNumber)); // Convertir de nuevo a número y agregar a la lista filtrada
    }
  }

  // Invertir la lista filtrada en una sola pasada
  let i = 0;
  let j = filteredArray.length - 1;

  while (i < j) {
    [filteredArray[i], filteredArray[j]] = [filteredArray[j], filteredArray[i]]; // Intercambio de posiciones
    i++;
    j--;
  }

  return filteredArray;
}
