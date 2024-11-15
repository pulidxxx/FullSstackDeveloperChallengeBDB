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

// Tests
console.log(getMinImpossibleAmount([5, 7, 1, 1, 2, 3, 22])); // 20
console.log(getMinImpossibleAmount([1, 5, 1, 1, 1, 10, 15, 20, 100])); // 55
console.log(getMinImpossibleAmount([1, 1, 1, 1, 1])); // 6
