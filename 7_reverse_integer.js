/**
 * https://leetcode.com/problems/reverse-integer/
 * Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.
 * Assume the environment does not allow you to store 64-bit integers (signed or unsigned).
 * /

/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
  let negv = false;
  if (0>x) {
    x*=-1;
    negv = true;
  }
  x = x.toString();
  let i=0, j=x.length-1;
  while(1) {
    if (i>=j) break;
    let tmp = x[i];
    x= x.substring(0, i) + x[j] + x.substring(i+1)
    x= x.substring(0, j) + tmp + x.substring(j+1)
    i++;
    j--;
  }
  x = parseInt(negv? (-1*x):x);

  return (x > Math.pow(2,31) -1)? 0: (x < -Math.pow(2,31) -1)? 0:x;
};


const cases = [123, -123, 120, 43, -2147483648, 1534236469];

(()=>{
  let a = 123;
  cases.forEach((_case)=>{
    console.log('------ ans: ' + reverse(_case))
  });
})();