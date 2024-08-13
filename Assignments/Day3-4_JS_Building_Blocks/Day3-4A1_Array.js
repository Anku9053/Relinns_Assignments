// Instructions:
// Approach - 1: The following task should be achieved using splice/slice methods.
// Approach - 2: Create a function that should remove any passed input (eg: "kiwi") given by the user from the array.
const fruits = ["Banana", "Orange", "Apple", "Kiwi"];
// // Use array methods to remove "Orange" and "Apple" from fruits.

const result = fruits.indexOf("Kiwi");
const various = fruits.splice(result, 1);
console.log(fruits);
