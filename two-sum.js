/**
 * https://leetcode.com/problems/two-sum/
 * Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.
 * You may assume that each input would have exactly one solution, and you may not use the same element twice.
 * You can return the answer in any order.
 */


/**
 * First submission
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let sol = [];
  for (let i=0; i<nums.length -1; i++) {
    for (let j=i+1; j<nums.length; j++) {
      if ((nums[i] + nums[j]) == target) {
        sol.push(i);
        sol.push(j);
        return sol;
      }
    }
  }
  return null;
};

function arrayEquals(a, b) {
  return Array.isArray(a) &&
    Array.isArray(b) &&
    a.length === b.length &&
    a.every((val, index) => val === b[index]);
}

const Pattern = [
  { 'id': '#1','target': 9,'input': [2, 7, 11, 15], 'expected': [0, 1]},
  { 'id': '#2','target': 6,'input': [3, 2, 4], 'expected': [1, 2]},
  { 'id': '#3','target': 6,'input': [3, 3], 'expected': [0, 1]},
  { 'id': '#4','target': 10,'input': [1, 3, 6, 7], 'expected': [1, 3]},
  { 'id': '#5','target': 0,'input': [-3, 4, 3, 90], 'expected': [0, 2]}
];

(()=>{
  for (let i in Pattern) {
    const p = Pattern[i];
    const sol = twoSum(p['input'], p['target']);
    if (arrayEquals(p['expected'], sol)) {
      console.log(`${p['id']} ==> pass`);
    } else {
      console.log(`Assertion failed on  ${p['id']} expected[${p['expected']}], output[${sol}]`)
    }
  }
})();

