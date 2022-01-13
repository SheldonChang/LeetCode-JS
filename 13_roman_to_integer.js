/**
 * https://leetcode.com/problems/roman-to-integer/
 *  I  1
 *  V  5
 *  X  10
 *  L  50
 *  C  100
 *  D  500
 *  M  1000
 */


/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
  const RomanMap = new Map([
    ['I', 1],
    ['V', 5],
    ['X', 10],
    ['L', 50],
    ['C', 100],
    ['D', 500],
    ['M', 1000]
  ]);
  let i = s.length-1;
  let sum = RomanMap.get(s[i]);
  let tmp = sum;
  for (i-=1; i >=0 ; i--) {
    let cur = RomanMap.get(s[i]);
    if (cur < tmp) {
      sum-=cur;
    } else {
      sum+=cur;
    }
    tmp = cur;
  }
  return sum;
};

(()=>{
  console.log(romanToInt('MCMXCIV')); // 1994
  console.log(romanToInt('III')); // 3
  console.log(romanToInt('XII')); // 12
  console.log(romanToInt('LVIII')); // 58
  console.log(romanToInt('XXVII')); // 27
})();
