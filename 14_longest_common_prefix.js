/**
 * https://leetcode.com/problems/longest-common-prefix/
 * Write a function to find the longest common prefix string amongst an array of strings.
 * If there is no common prefix, return an empty string "".
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
  if (undefined == strs || strs.length <= 1) {
    if (strs.length) return strs[0];
    return '';
  }
  let res = strs[0];
  for (let i = 1; i<strs.length; i++) {
    if (res.length > strs[i].length) {
     res = res.substring(0, strs[i].length);
    }

    let tmp ='';
    for(let j=res.length-1; j>=0; j--) {
      if (res[j] != strs[i][j]) {
        res = res.substring(0,j);
      }
    }
    if (res.length == 0 )return '';
  }
  return res;
};

const tp = [
["flower","flow","flight"],
["dog","racecar","car"],
["doooog","door","doodle"],
['a']
];

(()=>{
  tp.forEach((_tp)=>{
    console.log(longestCommonPrefix(_tp))
  });
})();
