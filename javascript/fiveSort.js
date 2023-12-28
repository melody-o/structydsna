const fiveSort = (nums) => {

    let i = 0;
    let j = nums.length -1;

    while (i <= j) {
      if (nums[j] === 5) {
        j -= 1
      }else if (nums[i] === 5) {
        [nums[i], nums[j]] = [nums[j], nums[i]]
        i++
      }else{
        i += 1
      }
    }

    return nums

     // let num;
    // for ( let i = 0; i < nums.length; i++) {
    //   if(nums[i] === 5) {
    //     const index = nums.indexOf(nums[i]);
    //     const x = nums.splice(index, 1);
    //     nums.push(x[0])
    //   }
    // }
  };
