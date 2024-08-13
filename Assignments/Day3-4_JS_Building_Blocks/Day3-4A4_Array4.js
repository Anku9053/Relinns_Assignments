let array = [12, 13, 14, 12, 13, 14, 12, 13, 14, 15, 99, 128];

// Task 1 → Write a program to check if the above array contains 14. Returned value must be a boolean.
const check = (values)=>values>14

const result = array.some(check);
console.log(result)




// Task 2 → Write a program to check if every element in the array is above 80 or not. Returned value must be a boolean.

const check2 = (values)=>values>=80

const result2 = array.every(check);
console.log(result2)