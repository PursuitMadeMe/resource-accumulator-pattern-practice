/**
 * Add all numbers in the array together to produce a single number.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The sum of all numbers in the array.
 */
function addAllNumbers(values) {
  let singleNum = 0; 
  for(let i = 0; i < values.length; i++){
    singleNum += values[i]
  }
  return singleNum;
}

/**
 * Multiply each number in the array by 2 and return a new array with the doubled values.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of whole numbers.
 */
function doubleAllNumbers(values) {

  for(let i = 0; i < values.length; i++){
    values[i] *= 2
  }
  return values;
}

/**
 * Return an array of only the even numbers in the inputted array.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number[]} - An array of only even numbers.
 */
function getAllEvenNumbers(values) {
  let evenArr = [];
  for(let i = 0; i = values.length; i++){
    if(values[i] % 2 === 0){
      evenArr.push(values[i]);
      
    }
    
  }
  return evenArr;
}

/**
 * Return the number given if it is in the array. Otherwise, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @param {number} val - A specific value to find.
 * @returns {number|null} - The found number or `null`.
 */
function findNumberByValue(values, val) {
  for(let i = 0; i < values.length; i++){
    if(values[i] === val){
      return val;
    } 
  }
  return null;
}

/**
 * Return `true` if all numbers in the array are negative. Otherwise, return `false`. Ignore `0` in determining whether or not an array includes all negative numbers.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {boolean} - Whether or not all numbers in the array are negative.
 */
function allNumbersAreNegative(values) {
  for(let i = 0; i < values.length; i++){
    if(values[i] > 0){
      return false;
    }
  }return true;

}

/**
 * Return the largest number in the array. If the array is empty, return `null`.
 *
 * @param {number[]} values - An array of whole numbers.
 * @returns {number} - The largest number in the array.
 */
function getLargestNumber(values) {
  if(values.length === 0){
    return null;

  }
  let largeNum = values[0];
  for (let i = 1; i < values.length; i++){
    if(values[i] > largeNum){
      largeNum = values[i];
    }
  }
  return largeNum;
}


module.exports = {
  addAllNumbers,
  doubleAllNumbers,
  getAllEvenNumbers,
  findNumberByValue,
  allNumbersAreNegative,
  getLargestNumber,
};
