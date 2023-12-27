




const intersection = (a, b) => {
    // todo
    let arr = [];
    let obj1 = {};

    for (let i = 0; i < a.length; i++) {
      let aNum = a[i]
      if (!(obj1[aNum])){
        obj1[aNum] = aNum
      }
    }

    for (let key in obj1){
      if (b.includes(parseInt(key))) arr.push(parseInt(key))
    }

    return arr
  };
