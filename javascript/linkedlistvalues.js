// linked list values
// Write a function, linkedListValues, that takes in the head of a linked list as an argument. The function should return an array containing all values of the nodes in the linked list.

const linkedListValues = (head) => {
    // todo
    let arr = [];
    // let current = head;

    // while (current !== null) {
    //   arr.push(current.val)
    //   current = current.next
    // }

    fillVal(head, arr)

    return arr
  };

  const fillVal = (head, arr) => {
    if (head === null) return;
    arr.push(head.val)
    fillVal(head.next, arr)
  }
