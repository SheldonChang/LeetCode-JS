
/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function(flowerbed, n) {
  if (flowerbed.length == 1) {
    if (!flowerbed[0]) n--;
   return n <= 0;
  }
  if (!flowerbed[0] && !flowerbed[1]) {
     n--;
     flowerbed[0] = 1;
  }

  for (let i=1; i< flowerbed.length; i++) {
    if (i == flowerbed.length-1) {
      if (!flowerbed[i] && !flowerbed[i-1]){
        n--;
      }
      break;
    }
    if (!flowerbed[i] && !flowerbed[i-1] && !flowerbed[i+1]) {
      flowerbed[i] = 1;
      n--;
      // i++; test with performance
    }
  }

  return n<=0;
};

(()=>{
  console.log(canPlaceFlowers([1,0,0,0,1], 1));
  console.log(canPlaceFlowers([1,0,0,0,1], 2));
  console.log(canPlaceFlowers([0,0,0,0,1], 2));
})();