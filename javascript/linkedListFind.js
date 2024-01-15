// Write a function, linkedListFind, that takes in the head of a linked list and a target value. The function should return a boolean indicating whether or not the linked list contains the target.


// const linkedListFind = (head, target) => {
//   // todo
//   // look at head if head != target head .next
//   // if head = target return true
//   //

//   let current = head;
//   while (a !== null) {
//     if (current.val === target) return true
//     current = current.next
//   }
//   return false
// }

const linkedListFind = (head, target) => {
    // todo
    // look at head if head != target head .next
    // if head = target return true

    // Base case # 1
    if (head === null) return false
    // Base case # 2
    if (head.val === target) return true
    // recursive case
    return linkedListFind(head.next, target)
  }
