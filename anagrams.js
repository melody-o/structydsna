// anagrams
// Write a function, anagrams, that takes in two strings as arguments. The function should return a boolean indicating whether or not the strings are anagrams. Anagrams are strings that contain the same characters, but in any order.


const anagrams = (s1, s2) => {

  let obj = {};
  let newS1 = s1.toLowerCase()
  let newS2 = s2.toLowerCase()

  for (let char of newS1){
    if (!(char in obj)){
      obj[char] = 0
    }
    obj[char] += 1
  }

  for (char of newS2){
   if(char in obj){
     obj[char] -= 1
   } else return false
  }

  for (let char in obj){
    if (obj[char] != 0)return false
  }

  return true

};
