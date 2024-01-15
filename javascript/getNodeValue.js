// Write a function, getNodeValue, that takes in the head of a linked list and an index. The function should return the value of the linked list at the specified index.

// If there is no node at the given index, then return null.


// const getNodeValue = (head, index) => {
//   // todo
//   let count = 0;
//   let current = head;
//   while (current !== null){
//       if (count === index) {
//         return current.val
//       }
//     current = current.next
//     count++
//   }
//   return null
// };

const getNodeValue = (head, index) => {
    //   index = 0 return head.val
    //   decrement index in the recursive case
      if (head === null) return null;
      if (index === 0) return head.val;
      return getNodeValue(head.next, index-=1);
    }
