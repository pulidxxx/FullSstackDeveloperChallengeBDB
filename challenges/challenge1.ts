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
      "Array length must be less than or equal to 100 and greater than 0."
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
    i++;
    j--;
  }

  return filteredArray;
}

// Felipe Pulido
// MD5 Hash: b54db41751f15810f78877762d09693a
// S = 5

// Tests
console.log(filterAndReverseArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 5)); // [4, 3, 2, 1]
console.log(
  filterAndReverseArray([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144], 5)
); //[34, 21, 13, 3, 2,  1,  1, 0]
