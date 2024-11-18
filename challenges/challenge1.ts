/* Challenge description: Having a list of n numbers with digits in range [0, S],
where n <= 100, switch all list positions in O(n) time. If the input number contains
 a digit greater or equal than S, you will delete the digit from the number, for example
with S=6, 61 becomes 1, and 6 will be deleted from the array. The result should be printed
in console/terminal. Please, don’t use built-in sort of your language.*/

function filterAndReverseArray(
  inputArray: number[],
  s: number
): number[] | void {
  let arrayLength = inputArray.length;

  // Validate array size
  if (arrayLength > 100 || arrayLength === 0) {
    console.log(
      "Debe ingresar una lista que no este vacía  y con 100 o menos números."
    );
    return;
  }

  let filteredArray: number[] = [];

  for (let num of inputArray) {
    let filteredNumber = "";
    let numString = num.toString(); // Convert the number to a string to iterate over each digit

    for (let digit of numString) {
      if (parseInt(digit) < s) {
        filteredNumber += digit; // Add digits that meet the range condition [0, s)
      }
    }

    // Check if the resulting number is not empty
    if (filteredNumber.length > 0) {
      filteredArray.push(parseInt(filteredNumber)); // Convert back to number and add to filtered list
    }
  }

  // Reverse the filtered array in a single pass
  let i = 0;
  let j = filteredArray.length - 1;

  while (i < j) {
    [filteredArray[i], filteredArray[j]] = [filteredArray[j], filteredArray[i]]; // Swap positions

    // // Usando una variable auxiliar
    // let temp = filteredArray[i];
    // filteredArray[i] = filteredArray[j];
    // filteredArray[j] = temp;

    i++;
    j--;
  }

  return filteredArray;
}

// Felipe Pulido
// MD5 Hash: b54db41751f15810f78877762d09693a
// S = 5
const S = 5;

// Request user input
let userPrompt = require("prompt-sync")();
let userInput = userPrompt("Ingrese los números separados por comas: ");
let inputArray = userInput
  .split(",")
  .map((num: string) => parseInt(num.trim()));
let result = filterAndReverseArray(inputArray, S);

if (result) {
  console.log(`Resultado con S=${S}:`, result);
}

// Tests

// Test 1: Numbers with multiple digits where only some meet the criteria.
// Input: 987, 456, 321, 654, 987
// Expected output: [ 4, 321, 4 ]

// Test 2: All numbers have digits greater than or equal to S.
// Input: 567, 789, 999
// Expected output: []

// Test 3: All numbers in the array meet the condition S.
// Input: 123, 12, 1, 3, 4
// Expected output: [ 4, 3, 1, 12, 123 ]

// Test 4:
// Input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20
// Expected output: [ 20, 1, 1, 1, 1, 1, 14, 13, 12, 11, 10, 4, 3, 2, 1]

// Test 5: Input with more than 100 numbers
// Input: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101
// Expected output: Debe ingresar una lista que no este vacía  y con 100 o menos números.
