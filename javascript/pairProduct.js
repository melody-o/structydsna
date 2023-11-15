// pair product
// Write a function, pairProduct, that takes in an array and a target product as arguments. The function should return an array containing a pair of indices whose elements multiply to the given target. The indices returned must be unique.

// Be sure to return the indices, not the elements themselves.

// There is guaranteed to be one such pair whose product is the target.



const pairProduct = (numbers, targetProduct) => {
    // todo
    let indxObj = {}
    let indxArr = []

    for (i in numbers){
      // console.log(numbers[i])
      let val = numbers[i]
      let prod = targetProduct / val
      if (prod in indxObj){
        return [indxObj[prod], Number(i)]
      }else {
        indxObj[val] = Number(i)
      }

    }
    indxArr.push(i)
    // console.log(indxArr)
    return indxArr
  };

//ideal way
  const pairProduct = (numbers, targetProduct) => {
    // todo
    let indxObj = {}


    for (let i = 0; i < numbers.length; i++){
      console.log(i)
      let val = numbers[i]
      let prod = targetProduct / val
      if (prod in indxObj){
        return [i, indxObj[prod]]
      }
      indxObj[val] = i
    }
  };
