/**
 * https://leetcode.com/problems/word-pattern/
 * 1'st commit
 * Input "abba", "dog dog dog dog"
 * Output true, Expected false
 */


/**
 * @param {string} pattern
 * @param {string} s
 * @return {boolean}
 */
var wordPattern = function(pattern, s) {
  if (pattern.split('').length != s.split(' ').length) return false;

  const sArr = s.split(' ');
  const pArr = pattern.split('');
  let obj = {}
  obj[pArr[0]] = sArr[0];
  for (let i = 1; i<sArr.length; i++) {
    if (obj.hasOwnProperty(pArr[i])) {
        if (sArr[i]!==obj[pArr[i]]) return false;
    } else {
        if (Object.values(obj).includes(sArr[i])) return false;
        obj[pArr[i]] = sArr[i] ;
    }
  }
  return true;
};


// main
(()=>{
  console.log(wordPattern('abba', 'dog cat cat dog'));
  console.log(wordPattern('abba', "dog cat cat fish"));
  console.log(wordPattern('aaaa', 'dog cat cat dog'));
  console.log(wordPattern('abba', 'dog dog dog dog'));
})();