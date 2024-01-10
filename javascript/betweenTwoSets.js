// There will be two arrays of integers. Determine all integers that satisfy the following two conditions:

// The elements of the first array are all factors of the integer being considered
// The integer being considered is a factor of all elements of the second array
// These numbers are referred to as being between the two arrays. Determine how many such numbers exist.

// Example


// There are two numbers between the arrays:  and .
// , ,  and  for the first value.
// ,  and ,  for the second value. Return .

// Function Description

// Complete the getTotalX function in the editor below. It should return the number of integers that are betwen the sets.

// getTotalX has the following parameter(s):

// int a[n]: an array of integers
// int b[m]: an array of integers
// Returns

// int: the number of integers that are between the sets

function getTotalX(a, b) {
    //iterate through our array
    //check for the max in the first array
    //check for min in second
    //for loops for min
    //check if the min can be modulod by each elements of both arrays, if yes count++
    //return count
    let count = 0;
    let max = -Infinity;
    let min = Infinity;

        for (let i = 0; i < a.length; i++) {
            if (a[i] > max) {
                max = a[i];
            }
        }
        for (let j = 0; j < b.length; j++) {
            if (b[j] < min) {
             min = b[j];
            }
        }
        for (let k = max; k <= min; k++) {
            if (a.every(ele => k % ele === 0)){
                if (b.every(ele => ele % k === 0)) {
                    count++;
                }
            }
        }
    return count;

    }
