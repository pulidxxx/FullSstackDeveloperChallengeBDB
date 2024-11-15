import promptSync from "prompt-sync";
/* Challenge description: Given an array of positive integers representing the values of coins in your possession, write a
function that returns the minimum amount of change (the minimum sum of money) that you
CANNOT give change. The given coins can have any positive integer value and aren't necessarily
unique (i.e., you can have multiple coins of the same value). You can use built-in sort of your
language.
*/

function getMinImpossibleAmount(coins: number[]): number {
  // Sort the coins in ascending order
  coins.sort((a, b) => a - b);

  // Initialize the maximum change that can be created
  let currentChangeCreated = 0;

  // Iterate over the coins
  for (const coin of coins) {
    // If the current coin is greater than the current change created + 1, return the result
    if (coin > currentChangeCreated + 1) {
      return currentChangeCreated + 1;
    }
    // Update the maximum change that can be created
    currentChangeCreated += coin;
  }

  // Return the final result if all coins can be combined
  return currentChangeCreated + 1;
}

// Request user input
let userPrompt = promptSync();
let userInput = userPrompt("Ingrese las monedas separadas por comas: ");
let inputArray = userInput
  .split(",")
  .map((num: string) => parseInt(num.trim()));
let result = getMinImpossibleAmount(inputArray);

if (result) {
  console.log("Resultado:", result);
}

// Tests

// Test 1: Consecutive coin values that allow making all change
// Input: 1, 2, 3, 4, 5
// Expected output: 16

// Test 2: Large coin values that don't allow making small change
// Input: 10, 20, 30
// Expected output: 1

// Test 3: Repeated coins that don't allow making some intermediate values
// Input: 1, 1, 3, 4, 9
// Expected output: 19

// Test 4: Only one coin with a value greater than 1
// Input: 5
// Expected output: 1

// Test 5: Unordered coins with large gaps between their values
// Input: 20, 2, 10, 2, 1
// Expected output: 6
