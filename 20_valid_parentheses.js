/**
 * Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.
 *   
 *   An input string is valid if:
 *   
 *   Open brackets must be closed by the same type of brackets.
 *   Open brackets must be closed in the correct order.
 * /

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
  if (1 >= s.length) return false;
  let arr = [];
  for (let i=0; i< s.length; i++) {
    if (/{|\[|\(/.test(s[i])) {
  	  arr.push(s[i]);
  	} else {
  	  let elm = arr.pop();
  	  if (!elm) return false;
  	  if ('}' === s[i]) {
        if (elm != '{') return false;
  	  } else if (']' === s[i]) {
        if (elm != '[') return false;
  	  } else if (')' === s[i]) {
        if (elm != '(') return false;
  	  }
  	}
  }
  return (arr.length===0);
};


const cases = [
 '{}',
 '()[]{}',
 '(]'
];

(()=>{
  cases.forEach((_case)=>{
    console.log(isValid(_case))
  });
})();