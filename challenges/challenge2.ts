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

// Tests
console.log(sortedSquaredArray([1, 2, 3, 5, 6, 8, 9], 5)); // [ 1, 4, 9, 25, 36 ]
console.log(sortedSquaredArray([-2, -1], 5)); //[ 1, 4 ]
console.log(sortedSquaredArray([-6, -5, 0, 5, 6], 5)); //[ 0, 25, 25, 36, 36 ]
console.log(sortedSquaredArray([-10, 10], 5)); //[]
