/**
 * https://leetcode.com/problems/palindrome-number/
 * Given an integer x, return true if x is palindrome integer.
 * An integer is a palindrome when it reads the same backward as forward.
 * For example, 121 is a palindrome while 123 is not.
 * Constraints:
 *     -2^31 <= x <= 2^31 - 1
 */

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) return false;
  let tmp = x;
  let conv = 0;
  while (tmp>0) {
    let last = tmp%10;
    conv = conv *10 + last;
    tmp= parseInt(tmp/10);
  }
  //console.log(`x[${x}] == conv[${conv}], ` + (x===conv));
  return x === conv;
};


(()=>{
   isPalindrome(2034);
   isPalindrome(2034302);
   isPalindrome(9);
})();
