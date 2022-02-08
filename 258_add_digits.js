/**
 * https://leetcode.com/problems/add-digits/
 * Given an integer num, repeatedly add all its digits until the result has only one digit, and return it.
 */

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function(num) {
  let sum = 0;
  while(num) {
    sum += num%10;
    num = Math.floor(num/10)
    if (sum>=10) {
      sum = (sum%10) +  Math.floor(sum/10);
    }
  }
  return sum;
  // console.log( (num - 1) % 9)
  // return 1 + (num - 1) % 9;
};

const cases = [
  38, 17, 999, 0, 9999, 19, 100
 ];

(()=>{
  cases.forEach((_case)=>{
    console.log('------ ans: ' + addDigits(_case))
  });
})();