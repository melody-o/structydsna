// Write a function, compress, that takes in a string as an argument. The function should return a compressed version of the string where consecutive occurrences of the same characters are compressed into the number of occurrences followed by the character. Single character occurrences should not be changed.

// 'aaa' compresses to '3a'
// 'cc' compresses to '2c'
// 't' should remain as 't'
// You can assume that the input only contains alphabetic characters.

const compress = (s) => {

  let str = [];
  let j = 0;
  let i = 0;

  while (j <= s.length) {
    let count = 0;
    if (s[j] === s[i]) {
      j+=1
    }else{
      count = j - i // j = 2 - i = 0 === 2
      // console.log(count)
      if (count === 1){
        str.push(s[i])
      }else{
        str.push(count,s[i])
      }
      i = j
    }
  }
  return str.join('')
};

console.log(compress('ccaaatsss')); // -> '2c3at3s'
console.log(compress('ssssbbz')); // -> '4s2bz'
console.log(compress('ppoppppp')); // -> '2po5p'
