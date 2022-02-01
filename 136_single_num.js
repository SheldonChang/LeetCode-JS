/**
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  let i=1, j = nums.length-1;
  let res = nums[0];
  while (i<=j) {
    res ^= nums[i]
    res ^= nums[j]
    i++;
    j--;
  }
  return res;
};

const cases = [[2,2,1], [4,1,2,1,2], [1]];

(()=>{
  cases.forEach((_case)=>{
    console.log('------ ans: ' + singleNumber(_case))
  });
})();