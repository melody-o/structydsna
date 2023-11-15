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
