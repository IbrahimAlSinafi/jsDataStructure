/*
Given a string s consists of upper/lower-case alphabets and empty space characters ' ', 
return the length of last word in the string.

If the last word does not exist, return 0.

Note: A word is defined as a character sequence consists of non-space characters only.
*/
/**
 * @param {string} s
 * @return {number}
 */
let lengthOfLastWord = function(s) {
    let arr = s.split(' ');
    let len = arr.length;
  
    for (let i=len; i>0; i--) {
      if (arr[i - 1] !== ''){
        return arr[i - 1].length;
      }
    }
    return 0;
  }
  
  const res = lengthOfLastWord('a ')
  console.log('result: ', res);