/**
 * You are given an m x n integer grid accounts where accounts[i][j] is the amount of money the ith
 * customer has in the jth bank. Return the wealth that the richest customer has.
 * A customer's wealth is the amount of money they have in all their bank accounts. The richest customer is the customer that has the maximum wealth.
 * /

/**
 * @param {number[][]} accounts
 * @return {number}
 */
var maximumWealth = function(accounts) {
  let i = 0, j = 0;
  let n =  accounts[0].length;
  let wealth = 0, maxW=0;
  while (i < accounts.length) {
    if (j < n) {
      wealth = wealth + accounts[i][j];
      j++;
    } else {
      maxW = Math.max(maxW, wealth);
      wealth = 0;
      j=0;
      i++;
    }
  }
  return maxW;
};


const cases = [
  [[1,2,3],[3,2,1]],
  [[1,5],[7,3],[3,5]],
  [[2,8,7],[7,1,3],[1,9,5]]
 ];

(()=>{
  cases.forEach((_case)=>{
    console.log('------ ans: ' + maximumWealth(_case))
  });
})();