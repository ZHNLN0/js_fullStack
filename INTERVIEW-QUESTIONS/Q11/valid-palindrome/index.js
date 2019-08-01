
// function validPalindrome(str) {
//   var a = str.split('').reverse().join('')
//   return a === str
// }

// console.log(validPalindrome('aba'))

var isValidChar = (c) => {  // abc 123
  return /^[\w]$/.test(c)
}

var isPalindrom = (s) => {
  s = s.toLowerCase();
  let left = 0,
    right = s.length - 1;

  while(left < right) {
    if(!isValidChar(s[left])) {
      left++;
      container;
    }
    if(!isValidChar(s[right])) {
      right--;
      continue;
    }
    if(s[left] == s[right]) {
      left++;
      right--;
    } else {
      break
    }
  }
  return right <= left;
}