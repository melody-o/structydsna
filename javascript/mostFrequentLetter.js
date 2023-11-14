// most frequent char
// Write a function, mostFrequentChar, that takes in a string as an argument. The function should return the most frequent character of the string. If there are ties, return the character that appears earlier in the string.

// You can assume that the input string is non-empty.


const mostFrequentChar = (s) => {
    let obj = {};
    let str = s.toLowerCase()
    let freqChar = '';
    let frequent = -Infinity;

    for (char of str){
      if (!(char in obj)){
        obj[char] = 0
      }
      obj[char] += 1
    }
    for (char in obj){
      if (obj[char] > frequent){
        frequent = obj[char]
        freqChar = char
        console.log(frequent)
      }
    }
    return freqChar
  };
