import promptSync from "prompt-sync";
/* Challenge description: Write a function that takes in a non-empty array of integers sorted in ascending order and returns a
new array of the same length with the squares of the original integers also sorted in ascending
order. If the output number is out of the range [0, SS] (for S=6 the range will be [0, 66]), you will
delete it of the output array. Please, don’t use built-in sort of your language.*/

function sortedSquaredArray(inputArray: number[], S: number): number[] {
  const SS = S * 10 + S; // Upper limit based on S
  const result: number[] = [];
  let start = 0;
  let end = inputArray.length - 1;

  // Iterate using two pointers from both ends of the array
  while (start <= end) {
    const squareStart = inputArray[start] * inputArray[start];
    const squareEnd = inputArray[end] * inputArray[end];

    if (squareStart < squareEnd) {
      if (squareEnd <= SS) {
        result.unshift(squareEnd); // Add to the beginning
      }
      end--; // Move end pointer left
    } else {
      if (squareStart <= SS) {
        result.unshift(squareStart); // Add to the beginning
      }
      start++; // Move start pointer right
    }
  }

  return result;
}

// Felipe Pulido
// MD5 Hash: b54db41751f15810f78877762d09693a
// S = 5
const S = 5;

// Request user input
let userPrompt = promptSync();
let userInput = userPrompt("Ingrese los números separados por comas: ");
let inputArray = userInput
  .split(",")
  .map((num: string) => parseInt(num.trim()));
let result = sortedSquaredArray(inputArray, S);

if (result) {
  console.log(`Resultado con S=${S}:`, result);
}

// Tests

// Tests

// Test 1: Array with positive and negative numbers around zero
// Input: -10, -3, -2, 0, 1, 3, 4
// Expected output: [ 0, 1, 4, 9, 9, 16 ]

// Test 2: All squared numbers exceed SS
// Input: -10, -9, -8, 8, 9, 10
// Expected output: []

// Test 3: Array with all numbers equal to 0
// Input: 0, 0, 0, 0, 0
// Expected output: [0, 0, 0, 0, 0]

// Test 4: Array with very large and small elements
// Input: -1000, -50, -5, 0, 5, 50, 1000
// Expected output: [ 0, 25, 25 ]
